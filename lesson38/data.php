<?
    $url = "https://rss.walla.co.il/feed/4703";
    $xml_string = file_get_contents($url);

    $xml = simplexml_load_string($xml_string, 'SimpleXMLElement', LIBXML_NOCDATA);
    $json = json_encode($xml);
    $array = json_decode($json, true);

    $array = $array['channel']['item'];

    echo json_encode($array);
?>