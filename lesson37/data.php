<?
    // טוען את הנתונים מקובץ ה-JSON
    $json = file_get_contents("data.json");
    // הופך את הטקסט מהקובץ למערך/אובייקט
    $array = json_decode($json, true);

    // זה גורם לשרת לעכב את הפעולה במספר שניות מבוקש
    // עשינו את זה לצורך דימוי עיכוב ברשת
    sleep(2);

    if (isset($_GET['limit'])) {
        $slice = array_slice($array, 0, $_GET['limit']);
        echo json_encode($slice);
    } else {
        echo json_encode($array);
    }
?>