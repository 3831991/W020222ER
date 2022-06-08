function convert() {
    var dollarRate = 3.21;
    var num = document.getElementById("ils").value;
    var result = Math.round(num / dollarRate * 1000) / 1000;
    document.getElementById("output").innerHTML = result + "$";
}

function setColor() {
    var c = document.getElementById("color").value;
    document.body.style.backgroundColor = c;
}

function calc() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    document.getElementById("output2").innerHTML = n1 * 2 + n2 * 2;
}