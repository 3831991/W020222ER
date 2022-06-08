var x = 0;

function myFunction() {
    document.getElementById("btn").innerHTML = ++x;
}

function myFunction() {
    x += 10;
    var myColor = "hsl(" + x + " 80% 40%)";
    document.getElementById("btn").style.color = myColor;
    document.getElementById("btn").innerHTML = x;
}