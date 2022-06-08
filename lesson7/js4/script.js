function check() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (num1 > num2) {
        document.getElementById("output").innerHTML = num1;
    } else if (num2 > num1) {
        document.getElementById("output").innerHTML = num2;
    } else {
        document.getElementById("output").innerHTML = "הם שווים";
    }
}