<?
    function getProducts() {
        $host = "localhost";
        $userName = "root";
        $password = "";
        $dbName = "full-stack";

        $link = mysqli_connect($host, $userName, $password, $dbName);
        mysqli_set_charset($link, "utf8");

        $result = mysqli_query($link, "SELECT * FROM `products`");

        $arr = [];

        while ($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }

        echo json_encode($arr);
    }

    function deleteProduct() {
        $host = "localhost";
        $userName = "root";
        $password = "";
        $dbName = "full-stack";

        $link = mysqli_connect($host, $userName, $password, $dbName);
        mysqli_set_charset($link, "utf8");

        $result = mysqli_query($link, "DELETE FROM `products` WHERE `id`=" . $_POST['id']);
    }

    $action = '';

    if (isset($_POST['action'])) {
        $action = $_POST['action'];
    }

    if ($action == 'delete') {
       deleteProduct();
    } else {
        getProducts();
    }
?>