function setColor() {
    var c = document.getElementById("color").value;
    document.body.style.backgroundColor = c;
}

var fs = 16;

function setSize() {
    fs += 5;
    document.getElementById('txt').style.fontSize = fs + 'px';
}

// אופציה נוספת לכתיבת פונקציה
// var setSize = function() {
// 
// }

function setTitle() {
    var x = document.getElementById("t").value;
    document.title = x;
}