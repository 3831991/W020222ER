<?
    if (!is_dir('folders')) {
        mkdir('folders', 0777, true);
        mkdir('folders/תיקייה 1', 0777, true);
        mkdir('folders/תיקייה 2', 0777, true);
        mkdir('folders/תיקייה 3', 0777, true);
    }

    $current = './folders';

    if (isset($_REQUEST['path'])) {
        $current = $_REQUEST['path'];
    }

    // אם שלחנו שם של תקייה חדשה - הוא יוצר אותה
    if (isset($_POST['folderName'])) {
        $path = $current . "/" . $_POST['folderName'];

        if (!is_dir($path)) {
            mkdir($path, 0777, true);
        }
    }

    $folders = scandir($current);

    array_splice($folders, 0, 2);
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Folders</title>

    <style>
        .card {
            width: 100px;
            font-size: 3em;
            color: orange;
            float: right;
            margin: 8px;
            cursor: pointer;
        }

        .card p {
            font-size: 15px;
            margin: 0;
            color: black;
        }

        .card:hover {
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1 style="direction: ltr;"><?= $current ?></h1>

        <? foreach ($folders as $f) { ?>
            <form action="folder.php" class="card" method="GET" ondblclick="this.submit()">
                <i class="fa fa-folder"></i>
                <p><?= $f ?></p>

                <input type="hidden" value="<?= $current ?>/<?= $f ?>" name="path">
            </form>
        <? } ?>

        <form action="folder.php" method="POST" class="card" style="color: black; padding: 18px 8px; width: 120px;">
            <i class="fa fa-plus"></i>
            <p><input placeholder="תיקייה חדשה" name="folderName" style="width: 100%; text-align: center; padding: 6px; border: 0; border-bottom: 1px solid gray;" autofocus></p>
            <input type="hidden" value="<?= $current ?>" name="path">
        </form>
    </div>
</body>

</html>