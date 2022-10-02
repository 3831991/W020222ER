<?
    $host = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "full-stack";

    // יצירת החיבור למסד הנתונים
    $link = mysqli_connect($host, $userName, $password, $dbName);
    mysqli_set_charset($link, "utf8");

    // פונקציה לקבלת המוצרים
    function getProducts() {
        global $link;

        $result = mysqli_query($link, "SELECT * FROM `products`");

        $arr = [];

        while ($row = mysqli_fetch_assoc($result)) {
            $row['date'] = date('d/m/Y', strtotime($row['date']));
            $arr[] = $row;
        }

        // מציגים את הפלט
        echo json_encode($arr);
    }

    // פונקציה למחיקת מוצר
    function removeProduct() {
        global $link;
        
        $id = mysqli_real_escape_string($link, $_POST['id']);

        mysqli_query($link, "DELETE FROM `products` WHERE `id` = $id");
    }

    function addProduct() {
        global $link;

        // פונקציה שדואגת שלא ייכנסו מזיקים למסד נתונים
        // (מטפל בגרשיים שעלולים ליצור נזק לקוד)
        $name = mysqli_real_escape_string($link, $_POST['name']);
        $price = mysqli_real_escape_string($link, $_POST['price']);

        mysqli_query($link, "INSERT INTO `products`(`name`, `price`, `date`) VALUES ('$name', '$price', CURRENT_DATE())");

        // מקבל את המזהה של האלמנט האחרון שנוסף
        $id = mysqli_insert_id($link);

        // מקבלים מהמסד נתונים את המוצר האחרון שנוסף
        $result = mysqli_query($link, "SELECT * FROM `products` WHERE `id` = $id");

        // מציגים את הפלט
        echo json_encode(mysqli_fetch_assoc($result));
    }


    $action = '';

    // אם יש פרמטר של פעולה, הוא שם אותו במשתנה
    if (isset($_POST['action'])) {
        $action = $_POST['action'];
    }

    // מפעיל פונקציה לפי הפרמטר של הפעולה שקיבלנו מהג'אווה סקריפט
    if ($action == 'delete') {
        removeProduct();
    } else if ($action == 'add') {
        addProduct();
    } else {
        getProducts();
    }
?>