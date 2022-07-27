<?
    // trim() = ניקוי רווחים מצידי הטקסט
    // strtolower() = הופך את הטקסט לאותיות קטנות
    // $_POST = מערך עם כל המידע שהגיע בפוסט

    $userName = strtolower(trim($_POST['userName']));
    $password = trim($_POST['password']);

    if ($userName == 'elyashiv' && $password == '1234') {
        $isLogin = true;
        $message = "התחברת בהצלחה!";
    } else {
        $isLogin = false;
        $message = "שם משתמש או סיסמה לא נכונים";
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="script.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <form class="<? echo ($isLogin ? '' : 'error') ?>">
            <h1><? echo $message ?></h1>
        </form>
    </body>
</html>