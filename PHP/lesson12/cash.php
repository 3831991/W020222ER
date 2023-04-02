<?
    require 'sqlConnect.php';

    $result = $db->get("cash_inventory", [
        'nis_0_1' => $db->raw("SUM(<nis_0_1>)"),
        'nis_0_5' => $db->raw("SUM(<nis_0_5>)"),
        'nis_1' => $db->raw("SUM(<nis_1>)"),
        'nis_2' => $db->raw("SUM(<nis_2>)"),
        'nis_5' => $db->raw("SUM(<nis_5>)"),
        'nis_10' => $db->raw("SUM(<nis_10>)"),
        'nis_20' => $db->raw("SUM(<nis_20>)"),
        'nis_50' => $db->raw("SUM(<nis_50>)"),
        'nis_100' => $db->raw("SUM(<nis_100>)"),
        'nis_200' => $db->raw("SUM(<nis_200>)"),
   ]);

    $inventory = [];

    foreach ($result as $k => $v) {
        $key = str_replace('nis_', '', $k);
        $key = str_replace('_', '.', $key);

        $inventory[$key] = (int)$v;
    }
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>קופה רושמת</title>
    <link rel="stylesheet" href="cash.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        const inventory = <?= json_encode($inventory) ?>;
    </script>
    <script src="cash.js" defer></script>
</head>

<body>
    <h1>קופה רושמת</h1>

    <div id="frame">
        <div class="card">
            <p>מלאי שטרות</p>
            <table id="inventory">
                <tr>
                    <? foreach ($inventory as $num => $amount) { ?>
                        <td>
                            <img src="./banknotes/img (<?= $num ?>).png">
                            <br> <b id="banknote_<?= $num ?>"><?= $amount ?></b>
                        </td>
                    <? } ?>
                </tr>
            </table>
        </div>

        <div class="card" style="margin: 16px 0;">
            <p>סכום לתשלום ללקוח</p>
            <input class="form-control" type="number" id="num1">
            <button class="btn btn-success" onclick="transaction()" style="margin: 6px 0;">בצע עסקה</button>
            <div id="output1"></div>
        </div>

        <button class="btn btn-success" onclick="document.getElementById('inventoryInsert').style.display = 'block'; this.style.display = 'none'">הוספה למלאי</button>

        <div class="card" id="inventoryInsert">
            <p>הוספה למלאי</p>
            <table id="inventory">
                <tr>
                    <? foreach ($inventory as $num => $amount) { ?>
                        <td>
                            <img src="./banknotes/img (<?= $num ?>).png">
                            <br> <input id="<?= $num ?>" class="form-control" type="number" value="0">
                        </td>
                    <? } ?>
                </tr>
            </table>
            
            <button class="btn btn-success" onclick="inventoryInsert()">הוסף למלאי</button>
        </div>
    </div>
    
</body>

</html>