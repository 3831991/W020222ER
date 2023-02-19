<?
    if (isset($_FILES['myFile'])) {
        $file = $_FILES['myFile'];

        move_uploaded_file($file['tmp_name'], "images/" . $file['name']);
        // name / type / tmp_name / error / size
    }
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>PHP</title>
</head>

<body>
    <div class="container">
        <div class="card bg-light text-dark">

            <h1>העלאת קבצים</h1>

            <form action="file-upload.php" method="POST" enctype="multipart/form-data">
                <div class="mb-3 mt-3">
                    <input class="form-control" type="file" name="myFile" require>
                </div>

                <button type="submit" class="btn btn-primary" style="display: block; width: 100%">העלה</button>
            </form>
        </div>
    </div>
</body>

</html>