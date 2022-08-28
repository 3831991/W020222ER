<?
    $images = scandir("./images");

    echo json_encode(array_slice($images, 2));
?>