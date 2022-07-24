<?
    // for ($i = 0; $i < 50; $i++) {
    //     echo "<p>המספר הנוכחי הוא $i</p>";
    // }
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
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>שלום <?= $_POST['firstName'] ?></h1>
        <p><b>שם פרטי: </b> <?= $_POST['firstName'] ?></p>
        <p><b>שם משפחה: </b> <?= $_POST['lastName'] ?></p>
        <p><b>סיסמה: </b> <?= $_POST['password'] ?></p>
    </body>
</html>