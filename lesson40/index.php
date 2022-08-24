<!DOCTYPE html>
<html>

<head>
    <title>אתר חדשות</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js" defer></script>
</head>

<body class="w3-light-grey w3-content" style="max-width:1600px" onload="getDataByCategory('news')">
    <nav class="w3-sidebar w3-collapse w3-white w3-animate-right" style="z-index:3;width:300px;" id="mySidebar"><br>
        <div class="w3-container">
            <h4><b>קטגוריות</b></h4>
        </div>
        <div class="w3-bar-block categories">
            <a class="w3-bar-item w3-button w3-padding" onclick="getDataByCategory('news', this)">חדשות</a>
            <a class="w3-bar-item w3-button w3-padding" onclick="getDataByCategory('estate', this)">נדל"ן</a>
            <a class="w3-bar-item w3-button w3-padding" onclick="getDataByCategory('cars', this)">מכוניות</a>
            <a class="w3-bar-item w3-button w3-padding" onclick="getDataByCategory('health', this)">בריאות</a>
            <a class="w3-bar-item w3-button w3-padding" onclick="getDataByCategory('tour', this)">טיולים</a>
            <a class="w3-bar-item w3-button w3-padding" onclick="getDataByCategory('judaism', this)">יהדות</a>
            <a class="w3-bar-item w3-button w3-padding" onclick="getDataByCategory('coloring', this)">דפי צביעה</a>
        </div>
    </nav>

    <div class="w3-main" style="margin-right:300px">
        <header id="portfolio">
            <div class="w3-container w3-padding-16">
                <h1><b>אתר החדשות שלי</b></h1>
                <div class="w3-section w3-bottombar"></div>
            </div>
        </header>

        <template id="artTemp">
            <div class="w3-third w3-container w3-margin-bottom">
                <a class="img w3-hover-opacity" target="https://news.walla.co.il"></a>
                <div class="w3-container w3-white desc">
                    <p id="title"><b></b></p>
                    <p id="description"></p>
                </div>
            </div>
        </template>

        <div class="w3-row-padding" id="articles"></div>

        <footer class="w3-container w3-padding-32 w3-dark-grey">
            <div class="w3-row-padding">
                <h3>POPULAR TAGS</h3>
                <p>
                    <span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">London</span>
                    <span class="w3-tag w3-grey w3-small w3-margin-bottom">IKEA</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">NORWAY</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">DIY</span>
                    <span class="w3-tag w3-grey w3-small w3-margin-bottom">Ideas</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Baby</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Family</span>
                    <span class="w3-tag w3-grey w3-small w3-margin-bottom">News</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Clothing</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Shopping</span>
                </p>
            </div>
        </footer>
    </div>
</body>

</html>