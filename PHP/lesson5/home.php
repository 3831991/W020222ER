<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>האתר שלי</title>
</head>

<?
    require 'services/sqlConnect.php';

    $articles = $db->select("articles", [
        "id [Int]",
        "addedTime",
        "publishedTime",
        "title",
        "description",
        "content",
        "image",
    ], [
        "isDeleted" => false,
        "ORDER" => ["publishedTime" => "DESC"],
        "LIMIT" => 8,
    ]);
?>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>

    <main style="padding: 16px; min-height: 55vh;">
        <div class="row">
            <? foreach ($articles as $a) { ?>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/<?= $a['image'] ?>" width="100%">
                            <h4 class="card-title"><?= $a['title'] ?></h4>
                            <p class="card-text"><?= $a['description'] ?></p>
                            <a href="#" class="btn btn-primary">צפה בכתבה</a>
                        </div>
                    </div>
                </div>
            <? } ?>
        </div>
    </main>

    <? include 'template/footer.php'; ?>
</body>

</html>