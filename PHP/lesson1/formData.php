<?
    if (!isset($_POST['fullName'], $_POST['phone'], $_POST['email'])) {
        die();
    }

    session_start();

    if (!isset($_SESSION['counter'])) {
        $_SESSION['counter'] = 0;
    }

    $_SESSION['counter']++;
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="form.css">
    <title>PHP</title>
</head>

<body>
    <div class="container">
        <div class="card bg-light text-dark">
            <h1>הטופס נשלח בהצלחה</h1>

            <p><b>שם מלא:</b> <?= $_POST['fullName'] ?></p>
            <p><b>טלפון:</b> <?= $_POST['phone'] ?></p>
            <p><b>אימייל:</b> <?= $_POST['email'] ?></p>
        </div>
    </div>
</body>

</html>