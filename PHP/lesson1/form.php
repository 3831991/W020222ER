<?
    session_start();

    $formArr = [
        [
            'type' => 'text',
            'label' => 'שם מלא',
            'name' => 'fullName',
        ],
        [
            'type' => 'tel',
            'label' => 'טלפון',
            'name' => 'phone',
        ],
        [
            'type' => 'email',
            'label' => 'אימייל',
            'name' => 'email',
        ],
    ];

    $counter = 0;

    if (isset($_SESSION['counter'])) {
        $counter = $_SESSION['counter'];
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
    <link rel="stylesheet" href="form.css">
    <title>PHP</title>
</head>

<body>
    <div class="container">
        <div class="card bg-light text-dark">

            <h1>טופס ליצירת קשר</h1>

            <?
                if ($counter >= 3) {
                    ?>
                        <p>הגזמתם עם כמות השליחות!!!!</p>
                    <?
                } else if ($counter) {
                    ?>
                        <p>הטופס כבר נשלח</p>
                    <?
                }

                if ($counter < 3) {
                    ?>
                        <form action="formData.php" method="POST">
                            <?
                                foreach ($formArr as $item) {
                                    ?>
                                        <div class="mb-3 mt-3">
                                            <label for="<?= $item['name'] ?>" class="form-label"><?= $item['label'] ?></label>
                                            <input type="<?= $item['type'] ?>" class="form-control" id="<?= $item['name'] ?>" name="<?= $item['name'] ?>">
                                        </div>
                                    <?
                                }
                            ?>

                            <button type="submit" class="btn btn-primary">שלח</button>
                        </form>
                    <?
                }
            ?>
        </div>
    </div>
</body>

</html>