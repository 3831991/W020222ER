<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Java Script - Ajax</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>
    <div id="frame">
        <header>
            <h1>Ajax</h1>
        </header>

        <button onclick="getData()">קבל נתונים</button>
        <input type="number" id="limit" placeholder="כמות תוצאות">

        <div class="loader"></div>

        <div id="output"></div>
    </div>
</body>

</html>