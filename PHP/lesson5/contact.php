<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>האתר שלי - צור קשר</title>
</head>

<?
    if (isset($_POST['refresh'])) {
        unset($_SESSION['isSended']);
    }

    require 'services/sqlConnect.php';

    if (isset($_POST['fullName'], $_POST['email'], $_POST['body']) && !isset($_SESSION['isSended'])) {
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            echo "ינוכל!! זה לא אימייל!!";
            die();
        }

        $db->insert("contact", [
            "fullName" => $_POST['fullName'],
            "email" => $_POST['email'],
            "body" => $_POST['body'],
        ]);

        $_SESSION['isSended'] = true;
    }
?>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>

    <? if (isset($_SESSION['isSended'])) { ?>
        <div class="container">
            <form action="./contact.php" method="POST">
                <input type="hidden" name="refresh">
                <button class="btn btn-success">טופס נוסף <i class="fa fa-plus"></i></button>
            </form>

            <br><br>

            <h1>הטופס נשלח בהצלחה</h1>
        </div>
    <? } else { ?>
        <form class="container" method="POST" action="./contact.php">
            <div class="card bg-dark">
                <h1>צור קשר</h1>
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">שם מלא</label>
                        <input type="text" class="form-control" name="fullName" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">אימייל</label>
                        <input type="email" class="form-control" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">תוכן</label>
                        <textarea name="body" class="form-control" cols="30" rows="10"></textarea>
                    </div>
                </div>

                <button class="btn" type="submit">שלח</button>
            </div>
        </form>
    <? } ?>


    <? include 'template/footer.php'; ?>
</body>

</html>