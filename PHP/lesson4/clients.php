<?
    require "./sqlConnect.php";

    // Select all.
    // $arr = $db->select("clients", "*");

    // קבלת הכל (עם בורר עמודות)
    $arr = $db->select("clients", [
        "id [Int]",
        "firstName",
        "lastName",
        "phone",
        "email",
        "city",
        "isFavorite [Bool]",
    ]);

    // קבלת אובייקט אחד
    // אם לא קיים - מחזיר NULL
    // $single = $db->get("clients", [
    //     "id [Int]",
    //     "firstName",
    //     "lastName",
    //     "phone",
    //     "email",
    //     "city",
    //     "isFavorite [Bool]",
    // ], [
    //     "id" => 500,
    // ]);

    // אם קיים מחזיר True - ולהיפף
    // $isExist = $db->has("clients", [
    //     "id" => 6,
    // ]);


    // $result = $db->debug()->sum("clients", "id");
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>לקוחות</title>
</head>

<body>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <? foreach ($arr as $i => $item) { ?>
                <tr>
                    <td><?= $i + 1 ?></td>
                    <td><?= $item['firstName'] ?></td>
                    <td><?= $item['lastName'] ?></td>
                    <td><?= $item['phone'] ?></td>
                    <td><?= $item['email'] ?></td>
                    <td><?= $item['city'] ?></td>
                </tr>
            <? } ?>
        </tbody>
    </table>
</body>

</html>