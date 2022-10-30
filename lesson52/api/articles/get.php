<?
    require '../sqlConnect.php';

    $result = mysqli_query($link, "SELECT a.id, a.publishedTime AS 'time', a.title, a.description, u.firstName AS 'reporterName', COUNT(c.id) AS 'comments' FROM articles AS a LEFT JOIN users AS u ON a.reporterId = u.id LEFT JOIN comments AS c ON a.id = c.articleId GROUP BY a.id");

    // פונקציה שלנו הממירה תוצאה ממסד הנתונים למערך
    $arr = selectToArray($result);

    echo json_encode($arr);
?>