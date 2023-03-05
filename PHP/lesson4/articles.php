<?
    require "./sqlConnect.php";

    $articles = $db->select("articles (a)", [
        "[>]comments (c)" => ["a.id" => "articleId"],
    ], [
        "a.id [Int]",
        "a.addedTime",
        "a.publishedTime",
        "a.title",
        "a.description",
        "a.content",
        "a.reporterId",
        "a.categoryId",
        "comments [Int]" => $db->raw("COUNT(<c.id>)"),
    ], [
        "a.isDeleted" => false,
        "GROUP" => "a.id",
    ]);

    if (empty($articles)) {
        die();
    }
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>

    <style>
        body {
            direction: rtl;
        }
    </style>

    <script>
        const articles = <?= json_encode($articles) ?>;

        function getComments(articleId) {
            fetch(`./getComments.php?id=${articleId}`)
                .then((response) => response.json())
                .then((data) => {
                    const tbody = document.querySelector("tbody");
                    tbody.innerHTML = "";

                    data.forEach((x, i) => {
                        const tr = document.createElement("tr");

                        tr.innerHTML = `
                            <td>${i + 1}</td>
                            <td>${x.userName}</td>
                            <td>${x.comment}</td>
                        `;

                        tbody.appendChild(tr);
                    });
                });
        }
    </script>

    <title>כתבות</title>
</head>

<body>
    <div class="container text-center">
        <div class="row">
            <? foreach ($articles as $art) { ?>
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title"><?= $art['title'] ?></h5>
                            <p class="card-text"><?= $art['description'] ?></p>
                            <p style="color: gray; font-size: 80%;">ID: <?= $art['id'] ?></p>
                            <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="getComments(<?= $art['id'] ?>)">תגובות (<?= $art['comments'] ?>)</a>
                        </div>
                    </div>
                </div>
            <? } ?>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">תגובות לכתבה</h1>
                </div>
                <div class="modal-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>שם מלא</th>
                                <th>תגובה</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">אישור</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>