<?
    $host = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "full-stack";

    $link = mysqli_connect($host, $userName, $password, $dbName);
    mysqli_set_charset($link, "utf8");

    function selectToArray($result) {
        $arr = [];

        while ($item = mysqli_fetch_assoc($result)) {
            $arr[] = $item;
        }

        return $arr;
    }
?>