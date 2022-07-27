<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="jquery.js"></script>
        <script src="script.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <form action="login.php" method="post">
            <h1>התחברות</h1>

            <label>שם משתמש:</label>
            <input type="text" class="form-control" required name="userName">

            <label>סיסמה</label>
            <input type="password" class="form-control" required name="password">

            <button class="btn btn-success" type="submit">שלח</button>
        </form>
    </body>
</html>