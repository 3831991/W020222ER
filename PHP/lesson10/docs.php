<?
    require './icount.php';

    define('DOCS', [
        "invoice" => 'חשבונית',
        "receipt" => 'קבלה',
        "invrec" => 'חשבונית מס/קבלה',
        "offer" => 'הצעת מחיר',
        "deal" => 'חשבון עסקה',
    ]);

    if (isset($_POST['doctype'], $_POST['docnum'])) {
        // מחיקת מסמך
        icount("https://api.icount.co.il/api/v3.php/doc/close", [
            "cid" => "fullstack",
            "user" => "elyashiv383",
            "pass" => "Aa123456%",
            "doctype" => $_POST['doctype'],
            "docnum" => $_POST['docnum'],
        ]);
    }

    // קבלת כל המסמכים
    $docsResult = icount("https://api.icount.co.il/api/v3.php/doc/search", [
        "cid" => "fullstack",
        "user" => "elyashiv383",
        "pass" => "Aa123456%",
        "status" => 0,
    ]);

    // קבלת כל הלקוחות
    $clientsResult = icount("https://api.icount.co.il/api/v3.php/client/get_list", [
        "cid" => "fullstack",
        "user" => "elyashiv383",
        "pass" => "Aa123456%",
    ]);

    $result = $docsResult['results_list'];
    $clients = $clientsResult['clients'];
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
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <title>מסמכים</title>
</head>

<body>
    <div class="container">
        <a class="btn btn-success" href="docs-create.php">מסמך חדש <i class="fa fa-file"></i></a>
        <br><br>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>לקוח</th>
                    <th>תאריך</th>
                    <th>סוג מסמך</th>
                    <th>סכום</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <?
                    foreach ($result as $i => $item) {
                        $isDecimal = $item['total'] - floor($item['total']) != 0 ? 1 : 0;
                ?>
                    <tr>
                        <td><?= $i + 1 ?></td>
                        <td><?= $clients[$item['client_id']]['client_name'] ?></td>
                        <td><?= date("d/m/Y", strtotime($item['dateissued'])) ?></td>
                        <td><?= DOCS[$item['doctype']] ?></td>
                        <td><?= number_format($item['total'], $isDecimal) ?> <?= $item['currency'] ?></td>
                        <td style="display: flex; text-align: left;">
                            <a class="btn btn-success" target="_blank" href="./docs-show.php?doctype=<?= $item['doctype'] ?>&docnum=<?= $item['docnum'] ?>">הצג</a>

                            <form action="./docs.php" method="POST">
                                <input type="hidden" name="doctype" value="<?= $item['doctype'] ?>">
                                <input type="hidden" name="docnum" value="<?= $item['docnum'] ?>">
                                <button class="btn btn-danger">מחק</button>
                            </form>
                        </td>
                    </tr>
                <? } ?>
            </tbody>
        </table>
    </div>
</body>

</html>