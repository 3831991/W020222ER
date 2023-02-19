<?
    // Numeric Array.
    $colors = [
        "Red",
        "Green",
        "Blue",
    ];

    // אותו דבר
    $colors = array(
        "Red",
        "Green",
        "Blue",
    );

    // הוספת איברים למערך
    $colors[] = "Purple";
    // אותו דבר
    array_push($colors, "Yellow");
    array_unshift($colors, "Black");

    // Associative Array.
    // מערך אסוציאטיבי (כמו אובייקט)
    $person = [
        "id" => 1,
        "firstName" => "Dani",
        "lastName" => "Shovevani",
        "phone" => "050-0500500",
        "grades" => [50,100,90,80,60],
        "isActive" => true,
    ];

    $person = array(
        "id" => 1,
        "firstName" => "Dani",
        "lastName" => "Shovevani",
        "phone" => "050-0500500",
        // "grades" => [50,100,90,80,60],
        "isActive" => true,
    );

    // הוספת איבר למערך
    $person['age'] = 50;

    // לצורך המתכנת
    // echo var_dump($colors);

    // מספר רנדומלי
    // echo rand(100000, 999999);

    // הצפנה ב-MD5
    // echo md5(123123);

    // foreach ($person as $k => $p) {
    //     echo "<p><b>$k: </b> $p</p>";
    // }

    // foreach ($colors as $i => $p) {
    //     echo "<p><b>$i: </b> $p</p>";
    // }

    // $name = "שלום";

    // echo "אהלן" . " אהלן $name <br>";

    // echo "הגיל שלו הוא {$person['age']}";

    echo var_dump($_SERVER['REMOTE_ADDR']);
?>