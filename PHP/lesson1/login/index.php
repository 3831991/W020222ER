<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>PHP - Login</title>
</head>

<body>
    <div class="container">
        <div class="card bg-light text-dark">

            <h1>התחברות</h1>

            <form action="loginData.php" method="POST">
                <div class="mb-3 mt-3">
                    <label class="form-label">שם משתמש:</label>
                    <input class="form-control" type="text" name="username" require>
                </div>
                
                <div class="mb-3 mt-3">
                    <label class="form-label">סיסמה:</label>
                    <input class="form-control" type="password" name="password" require>
                </div>

                <button type="submit" class="btn btn-primary">התחבר</button>
            </form>
        </div>
    </div>
</body>

</html>