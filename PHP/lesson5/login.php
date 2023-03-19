<!DOCTYPE html>
<html>

<head>
    <? require 'template/meta.php'; ?>
    <title>האתר שלי - צור קשר</title>
</head>

<?
    require 'services/sqlConnect.php';

    $errorMassage = "";

    if (isset($_POST['email'], $_POST['password'])) {
        $user = $db->get("users", [
            "id [Int]",
            "fullName",
            "email",
            "isAdmin [Bool]",
        ], [
            "AND" => [
                "email" => $_POST['email'],
                "password" => md5($_POST['password']),
            ],
        ]);

        if (empty($user)) {
            $errorMassage = "שם משתמש או סיסמה לא נכונים";
        } else {
            $_SESSION['user'] = $user;

            header("Location: home.php");
        }
    }
?>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>

    <form class="container" method="POST" action="./login.php">
        <div class="card bg-dark">
            <h1>התחברות</h1>
            <div class="card-body">
                <div class="mb-3">
                    <label class="form-label">אימייל</label>
                    <input type="email" class="form-control" name="email" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">סיסמה</label>
                    <input type="password" class="form-control" name="password" required>
                </div>
            </div>

            <? if ($errorMassage) { ?>
                <p><?= $errorMassage ?></p>
            <? } ?>

            <button class="btn" type="submit">התחבר</button>
        </div>
    </form>

    <? include 'template/footer.php'; ?>
</body>

</html>