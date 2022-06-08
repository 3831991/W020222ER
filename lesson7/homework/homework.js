function hello() {
    var x = document.getElementById("name").value;
    alert("שלום " + x + " איך היה היום בעבודה?");

    // ניקוי השדה 
    document.getElementById("name").value = "";
}

function multi() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    alert(n1 * n2);

    // ניקוי השדות
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function sum() {
    var n1 = document.getElementById("num3").value;
    var n2 = document.getElementById("num4").value;
    var n3 = document.getElementById("num5").value;

    alert(Number(n1) + Number(n2) + Number(n3));
}