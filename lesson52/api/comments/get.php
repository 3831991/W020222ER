<?
    require '../sqlConnect.php';

    $articleId = mysqli_real_escape_string($link, $_GET['articleId']);

    $result = mysqli_query($link, "SELECT * FROM `comments` WHERE `articleId` = '$articleId' AND `isDeleted` = 0");

    // פונקציה שלנו הממירה תוצאה ממסד הנתונים למערך
    $arr = selectToArray($result);

    echo json_encode($arr);
?>