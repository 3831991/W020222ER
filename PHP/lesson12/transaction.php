<?
    require 'sqlConnect.php';

    $json = file_get_contents("php://input");
    $data = json_decode($json, true);
    
    $cash = $data['usedCash'];

    $db->insert("cash_inventory", [
        'title' => 'תשלום ללקוח',
        'nis_0_1' =>    isset($cash['0.1']) ? -$cash['0.1'] : 0,
        'nis_0_5' =>    isset($cash['0.5']) ? -$cash['0.5'] : 0,
        'nis_1' =>      isset($cash['1'])   ? -$cash['1']   : 0,
        'nis_2' =>      isset($cash['2'])   ? -$cash['2']   : 0,
        'nis_5' =>      isset($cash['5'])   ? -$cash['5']   : 0,
        'nis_10' =>     isset($cash['10'])  ? -$cash['10']  : 0,
        'nis_20' =>     isset($cash['20'])  ? -$cash['20']  : 0,
        'nis_50' =>     isset($cash['50'])  ? -$cash['50']  : 0,
        'nis_100' =>    isset($cash['100']) ? -$cash['100'] : 0,
        'nis_200' =>    isset($cash['200']) ? -$cash['200'] : 0,
   ]);

    // שיטה קודמת ופמיטיבית
    // foreach ($data['usedCash'] as $num => $amount) {
    //     $db->update("cash", [
    //         "amount[-]" => $amount,
    //     ], [
    //         "num" => $num
    //     ]);
    // }
?>