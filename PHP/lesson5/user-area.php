<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>האתר שלי - איזור אישי</title>
</head>

<?
    if (!isset($_SESSION['user'])) {
        header("Location: login.php");
        die();
    }

    require 'services/sqlConnect.php';

    if (isset($_POST['fullName'], $_POST['email'])) {
        $db->update("users", [
            "fullName" => $_POST['fullName'],
            "email" => $_POST['email'],
        ], [
            "id" => $_SESSION['user']['id'],
        ]);

        $_SESSION['user']['fullName'] = $_POST['fullName'];
        $_SESSION['user']['email'] = $_POST['email'];
    } elseif (isset($_POST['password'])) {
        $db->update("users", [
            "password" => md5($_POST['password']),
        ], [
            "id" => $_SESSION['user']['id'],
        ]);
    }
?>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>
    
    <div class="container">
        <form class="container" method="POST" action="./user-area.php">
            <div class="card">
                <h1>פרטים אישיים</h1>
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">שם מלא</label>
                        <input type="text" class="form-control" name="fullName" value="<?= $_SESSION['user']['fullName'] ?>" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">אימייל</label>
                        <input type="email" class="form-control" name="email" value="<?= $_SESSION['user']['email'] ?>" required>
                    </div>
                </div>

                <button class="btn" type="submit">שמור <i class="fa fa-save"></i></button>
            </div>
        </form>

        <form class="container" method="POST" action="./user-area.php">
            <div class="card">
                <h1>החלפת סיסמה</h1>
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">סיסמה</label>
                        <input type="text" class="form-control" name="password" required>
                    </div>
                </div>

                <button class="btn" type="submit">החלף <i class="fa fa-check"></i></button>
            </div>
        </form>
    </div>

    <? include 'template/footer.php'; ?>
</body>

</html>