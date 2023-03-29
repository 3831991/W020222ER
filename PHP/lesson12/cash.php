<?
    require 'sqlConnect.php';

    $result = $db->select("cash", [
        "num",
        "amount [Int]",
    ]);

    $inventory = [];

    foreach ($result as $res) {
        $key = $res['num'];

        $inventory[$key] = $res['amount'];
    }
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>קופה רושמת</title>
    <link rel="stylesheet" href="cash.css">
    <script>
        const inventory = <?= json_encode($inventory) ?>;
    </script>
    <script src="cash.js" defer></script>
</head>

<body>
    <div id="frame">
        <header>
            <h1>קופה רושמת</h1>
        </header>

        <div class="card">
            <p>מלאי שטרות</p>
            <table id="inventory"></table>
        </div>

        <div class="card">
            <p>יש לאפשר לכתוב סכום ולהמחיש אותו באמצעו שטרות.</p>
            <input type="number" id="num1">
            <button onclick="showBanknotes()">הצג</button>
            <div id="output1"></div>
        </div>

    </div>
</body>

</html>