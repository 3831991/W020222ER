function bigColor() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    document.getElementById("num1").style.backgroundColor = 'white';
    document.getElementById("num2").style.backgroundColor = 'white';

    if (num1 > num2) {
        document.getElementById("num1").style.backgroundColor = '#a5fca5';
    } else if (num1 < num2) {
        document.getElementById("num2").style.backgroundColor = '#a5fca5';
    }
}

function check() {
    var answer = document.getElementById("answer").value;

    if (answer == 8) {
        alert("נכון");
    } else {
        alert("לא נכון");
    }
}

function less() {
    // לא קריטי שם המשתנה
    var x = document.getElementById("num3").value;
    var y = document.getElementById("num4").value;
    var result = x - y;

    document.getElementById("output").innerHTML = x + " - " + y + " = " + result;
}

var isBtn = true;

function btn() {
    isBtn = !isBtn;
    document.getElementById("btn").innerHTML = isBtn;
}

function replace() {
    var x = document.getElementById("num5").value;
    var y = document.getElementById("num6").value;

    document.getElementById("num5").value = y;
    document.getElementById("num6").value = x;
}

function evenOrOdd() {
    var x = Number(document.getElementById("num7").value);

    if (x % 2) {
        alert("אי זוגי");
    } else {
        alert("זוגי");
    }
}

function answer() {
    var x = document.getElementById("sel").value;

    if (x == 8) {
        alert("נכון");
    } else {
        alert("טעות");
    }
}

var num = 0;

function append() {
    num++;
    document.getElementById("output2").innerHTML += num + ", ";
}