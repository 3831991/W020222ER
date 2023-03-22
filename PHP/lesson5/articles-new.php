<?
    require 'services/sqlConnect.php';

    if (isset($_POST['publishedTime'], $_POST['title'], $_POST['description'])) {
        $image = $_FILES['image'];
        $imageName = "";
        $allowed = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

        if (in_array($image['type'], $allowed)) {
            move_uploaded_file($image['tmp_name'], 'images/' . $image['name']);
            $imageName = $image['name'];
        }

        $db->insert("articles", [
            "publishedTime" => $_POST['publishedTime'],
            "title" => $_POST['title'],
            "description" => $_POST['description'],
            'image' => $imageName,
        ]);

        header("Location: articles-manage.php");
        die();
    }
?>

<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>האתר שלי - יצירת כתבה</title>
</head>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>
    
    <form class="container" method="POST" action="./articles-new.php" enctype="multipart/form-data">
        <div class="card bg-dark">
            <h1>יצירת כתבה</h1>
            <div class="card-body">
                <div class="mb-3">
                    <label class="form-label">תאריך פרסום</label>
                    <input type="date" class="form-control" name="publishedTime" value="<?= date("Y-m-d") ?>" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">כותרת</label>
                    <input type="text" class="form-control" name="title" placeholder="הקלד כאן את הכותרת.." required>
                </div>
                <div class="mb-3">
                    <label class="form-label">תמונה</label>
                    <input type="file" class="form-control" name="image" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">תיאור</label>
                    <textarea name="description" class="form-control" cols="30" rows="10" placeholder="הקלד כאן את התוכן.."></textarea>
                </div>
            </div>

            <button class="btn" type="submit">הוסף <i class="fa fa-save"></i></button>
        </div>
    </form>

    <? include 'template/footer.php'; ?>
</body>

</html>