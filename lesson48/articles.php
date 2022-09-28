<?
    $host = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "full-stack";

    $link = mysqli_connect($host, $userName, $password, $dbName);
    mysqli_set_charset($link, "utf8");

    $result = mysqli_query($link, "SELECT a.publishedTime, a.title, a.description, u.firstName AS 'name' FROM articles AS a LEFT JOIN users AS u ON a.reporterId = u.id");

    $arr = [];

    while ($obj = mysqli_fetch_assoc($result)) {
        $arr[] = $obj;
    }

    echo json_encode($arr);
?>