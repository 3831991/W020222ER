<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>האתר שלי - ניהול פניות</title>

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
        $db->update("contact", [
            "isDeleted" => true,
        ], [
            "id" => $_POST['delete'],
        ]);
    }

    $contact = $db->select("contact", [
        "id [Int]",
        "createTime",
        "fullName",
        "email",
        "body",
    ], [
        "isDeleted" => false,
    ]);
?>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>
    <br>
    
    <h1>ניהול פניות</h1>

    <div class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>תאריך הוספה</th>
                    <th>שם מלא</th>
                    <th>אימייל</th>
                    <th>תוכן</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <? foreach ($contact as $i => $item) { ?>
                    <tr>
                        <td><?= $i + 1 ?></td>
                        <td><?= $item['createTime'] ?></td>
                        <td><?= $item['fullName'] ?></td>
                        <td><?= $item['email'] ?></td>
                        <td><?= $item['body'] ?></td>
                        <td>
                            <form action="./contact-manage.php" method="POST">
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