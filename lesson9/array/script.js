// הגדרת מערך ריק
var numbers = [];

function add() {
    // בדיקה האם הוקש Enter
    if (event.keyCode == 13) {
        var num = document.getElementById("num").value;
        // הוספה למערך
        numbers.push(Number(num));
        // איפוס תיבת הקלט
        document.getElementById("num").value = "";
        // הפעלת הפונקציה שמציגה את המספרים באתר
        show();
    }
}

function show() {
    document.getElementById("output").innerHTML = numbers.join();
}

function sort() {
    numbers.sort(function(a, b) {
        return a - b;
    });
    show();
}

function removeLast() {
    document.getElementById("message").innerHTML = numbers.pop();
    show();
}