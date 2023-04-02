<?
    require "./sqlConnect.php";

    $result = $db->select("cash_inventory", [
        'time',
        'title',
        'nis_0_1 [Int]',
        'nis_0_5 [Int]',
        'nis_1 [Int]',
        'nis_2 [Int]',
        'nis_5 [Int]',
        'nis_10 [Int]',
        'nis_20 [Int]',
        'nis_50 [Int]',
        'nis_100 [Int]',
        'nis_200 [Int]',
   ]);
?>

<!DOCTYPE html>
<html dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>לקוחות</title>

    <style>
        th, td {
            text-align: center;
        }
    </style>
</head>

<body>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>שם הלקוח</th>
                <th>זמן רכישה</th>
                <th>סכום</th>
            </tr>
        </thead>
        <tbody>
            <?
                foreach ($result as $i => $item) {
                    $amount = 0;

                    $amount += 0.1 * $item['nis_0_1'];
                    $amount += 0.5 * $item['nis_0_5'];
                    $amount += 1 * $item['nis_1'];
                    $amount += 2 * $item['nis_2'];
                    $amount += 5 * $item['nis_5'];
                    $amount += 10 * $item['nis_10'];
                    $amount += 20 * $item['nis_20'];
                    $amount += 50 * $item['nis_50'];
                    $amount += 100 * $item['nis_100'];
                    $amount += 200 * $item['nis_200'];

                    $style = "";

                    if ($amount > 0) {
                        $style = 'style="background: #8cee59;"';
                    }
            ?>
                <tr <?= $style ?>>
                    <td><?= $i + 1 ?></td>
                    <td><?= $item['title'] ?></td>
                    <td><?= date("d/m/Y H:i", strtotime($item['time'])) ?></td>
                    <td style="direction: ltr;"><?= number_format($amount) ?></td>
                </tr>
            <? } ?>
        </tbody>
    </table>
</body>

</html>