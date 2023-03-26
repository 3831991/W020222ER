<?
    require './icount.php';

    $fileds = [
        'clientName',
        'type',
        'product',
        'price',
    ];

    $isCreate = true;

    foreach ($fileds as $f) {
        if (!isset($_POST[$f])) {
            $isCreate = false;
            break;
        }
    }

    if ($isCreate) {
        $json = icount("https://api.icount.co.il/api/v3.php/doc/create", [
            // authentication
            "cid" => "fullstack",
            "user" => "elyashiv383",
            "pass" => "Aa123456%",

            "doctype" => "offer", // $_POST['type']
            "client_name" => $_POST['clientName'], // Client name
            "paid" => $_POST['price'],

            // invoice items
            "items" => [
                [
                    "description" => $_POST['product'],
                    "unitprice" => $_POST['price'],
                    "quantity" => 1,
                ],
                // [
                //     "description" => "Second item",
                //     "unitprice" => 10,
                //     "quantity" => 5,
                // ],
            ],
            "is_test" => true,
        ]);

        header("Location: " . $json['doc_url']);
        die();
    }
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>מסמך חדש</title>
</head>

<body>
    <form class="container" method="POST" action="./docs-create.php">
        <div class="card bg-dark">
            <h1>יצירת מסמך</h1>
            <div class="card-body">
                <div class="mb-3">
                    <label class="form-label">שם הלקוח</label>
                    <input type="text" class="form-control" name="clientName" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">סוג המסמך</label>
                    <select class="form-control" name="type">
                        <option value="invoice">חשבונית</option>
                        <option value="receipt">קבלה</option>
                        <option value="invrec">חשבונית מס/קבלה</option>
                        <option value="offer">הצעת מחיר</option>
                        <option value="deal">חשבון עסקה</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">מוצר</label>
                    <input type="text" class="form-control" name="product" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">מחיר</label>
                    <input type="text" class="form-control" name="price" required>
                </div>
            </div>

            <button class="btn" type="submit">צור מסמך</button>
        </div>
    </form>
</body>

</html>