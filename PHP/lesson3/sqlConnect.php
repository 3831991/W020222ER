<?
    $host = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "full-stack";

    // חיבור ראשוני לדטה בייס
    $link = mysqli_connect($host, $userName, $password, $dbName);
    // שימוש בקידוד מתאים
    mysqli_set_charset($link, "utf8");
?>