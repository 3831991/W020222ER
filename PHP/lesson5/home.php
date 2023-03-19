<!DOCTYPE html>
<html>

<head>
    <? include 'template/meta.php'; ?>
    <title>האתר שלי</title>
</head>

<?
    require 'services/sqlConnect.php';

    $articles = $db->select("articles", [
        "id [Int]",
        "addedTime",
        "publishedTime",
        "title",
        "description",
        "content",
    ], [
        "isDeleted" => false,
        "ORDER" => ["publishedTime" => "DESC"],
        "LIMIT" => 8,
    ]);
?>

<body>
    <? include 'template/header.php'; ?>
    <? include 'template/navbar.php'; ?>

    <main>
        <? foreach ($articles as $a) { ?>
            <div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
                <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    <div class="col">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title"><?= $a['title'] ?></h5>
                                <p><?= $a['description'] ?></p>
                                <div class="text-center my-4"> <a href="#" class="btn btn-warning">צפה בכתבה</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <? } ?>
    </main>

    <? include 'template/footer.php'; ?>
</body>

</html>