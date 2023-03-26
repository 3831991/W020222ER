<?
    if (!isset($_GET['doctype'], $_GET['docnum'])) {
        header("HTTP/1.0 404 Not Found");
        die();
    }

    require './icount.php';

    $json = icount("https://api.icount.co.il/api/v3.php/doc/get_doc_url", [
        "cid" => "fullstack",
        "user" => "elyashiv383",
        "pass" => "Aa123456%",
        "doctype" => $_GET['doctype'],
        "docnum" => $_GET['docnum'],
    ]);

    header("Location: " . $json['doc_url']);
?>