<?
    if (!isset($_GET['category'])) {
        echo json_encode([
            'status' => 'error',
            'message' => 'חסרה הקטגוריה',
        ]);

        die();
    }

    $url = "";

    switch ($_GET['category']) {
        case "news" : $url = "https://rss.walla.co.il/feed/1?type=main"; break; // חדשות
        case "estate" : $url = "https://rss.walla.co.il/feed/199?type=main"; break; // נדל"ן
        case "cars" : $url = "https://rss.walla.co.il/feed/4705"; break; // מכוניות
        case "health" : $url = "https://rss.walla.co.il/feed/578"; break; // בריאות
        case "tour" : $url = "https://rss.walla.co.il/feed/5735"; break; // טיולים
        case "judaism" : $url = "https://rss.walla.co.il/feed/12937"; break; // יהדות
        case "coloring" : $url = "https://rss.walla.co.il/feed/2270"; break; // דפי צביעה
    }

    if (!$url) {
        echo json_encode([
            'status' => 'error',
            'message' => 'קטגוריה לא תקינה',
        ]);

        die();
    }

    $xml_string = file_get_contents($url);

    $xml = simplexml_load_string($xml_string, 'SimpleXMLElement', LIBXML_NOCDATA);
    $json = json_encode($xml);
    $array = json_decode($json, true);

    $array = $array['channel']['item'];

    echo json_encode([
        'status' => 'success',
        'data' => $array,
    ]);
?>