<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>האתר שלי - ניהול כתבות</title>

    <style>
        button.btn {
            font-size: 0.75em;
        }

        form {
            display: inline-block;
        }
    </style>
</head>

<?
    require 'services/sqlConnect.php';

    if (isset($_POST['delete'])) {
        $db->update("articles", [
            "isDeleted" => true,
        ], [
            "id" => $_POST['delete'],
        ]);
    }

    $articles = $db->select("articles", [
        "id [Int]",
        "addedTime",
        "publishedTime",
        "title",
        "description",
        "content",
    ], [
        "isDeleted" => false,
    ]);
?>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>
    
    <br>
    <h1>ניהול כתבות</h1>

    <div class="container">
        <a class="btn btn-success" href="articles-new.php">הוספת כתבה <i class="fa fa-plus"></i></a>
        <br><br>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>תאריך הוספה</th>
                    <th>תאריך פרסום</th>
                    <th>כותרת</th>
                    <th>תיאור</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <? foreach ($articles as $i => $item) { ?>
                    <tr>
                        <td><?= $i + 1 ?></td>
                        <td><?= $item['addedTime'] ?></td>
                        <td><?= $item['publishedTime'] ?></td>
                        <td><?= $item['title'] ?></td>
                        <td><?= $item['description'] ?></td>
                        <td>
                            <form action="./articles-edit.php" method="GET">
                                <input type="hidden" name="id" value="<?= $item['id'] ?>">
                                <button class="btn btn-success"><i class="fa fa-edit"></i></button>
                            </form>

                            <form action="./articles-manage.php" method="POST">
                                <input type="hidden" name="delete" value="<?= $item['id'] ?>">
                                <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
                            </form>
                        </td>
                    </tr>
                <? } ?>
            </tbody>
        </table>
    </div>

    <? include 'template/footer.php'; ?>
</body>

</html>