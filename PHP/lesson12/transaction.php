<?
    require 'sqlConnect.php';

    $json = file_get_contents("php://input");
    $data = json_decode($json, true);

    foreach ($data['usedCash'] as $num => $amount) {
        $db->update("cash", [
            "amount[-]" => $amount,
        ], [
            "num" => $num
        ]);
    }
?>