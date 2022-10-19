<?
    require '../sqlConnect.php';

    // פונקציה שדואגת שלא ייכנסו מזיקים למסד נתונים
    // (מטפל בגרשיים שעלולים ליצור נזק לקוד)
    $comment = mysqli_real_escape_string($link, $_POST['comment']);
    $userName = mysqli_real_escape_string($link, $_POST['userName']);
    $articleId = mysqli_real_escape_string($link, $_POST['articleId']);

    mysqli_query($link, "INSERT INTO `comments`(`articleId`, `userName`, `comment`) VALUES ('$articleId', '$userName', '$comment')");

    // מקבל את המזהה של האלמנט האחרון שנוסף
    $id = mysqli_insert_id($link);

    // מקבלים מהמסד נתונים את האלמנט האחרון שנוסף
    $result = mysqli_query($link, "SELECT * FROM `comments` WHERE `id` = $id");

    // מציגים את הפלט
    echo json_encode(mysqli_fetch_assoc($result));
?>