<?
    require "./sqlConnect.php";
    
    if (!isset($_GET['id'])) {
        die();
    }

    $result = $db->select("comments", [
        "id [Int]",
        "time",
        "userName",
        "comment",
    ], [
        "AND" => [
            "articleId" => $_GET['id'],
            "isDeleted" => false,
        ],
    ]);

    echo json_encode($result);
?>