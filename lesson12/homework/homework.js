/**
 * בודק האם המספר הוא ראשוני
 * ומחזיר את התשובה למתכנת שמשתמש בפונקציה
 */
function isPrime(x) {
    for (var i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }

    return true;
}

// כותבת פלט האם המספר ראשוני או לא
function checkIsPrime() {
    var num1 = Number(document.getElementById("num1").value);

    if (isPrime(num1)) {
        document.getElementById("output1").innerHTML = 'המספר ראשוני';
    } else {
        document.getElementById("output1").innerHTML = 'המספר לא ראשוני';
    }
}

function checkAllDownPrime() {
    var num = Number(document.getElementById("num2").value);
    var numbers = [];

    for (var i = 1; i < num; i++) {
        if (isPrime(i)) {
            numbers.push(i);
        }
    }

    document.getElementById("output2").innerHTML = numbers.join(", ");
}

function checkAllDownIsNotPrime() {
    var num = Number(document.getElementById("num3").value);
    var numbers = [];

    for (var i = 1; i < num; i++) {
        if (!isPrime(i)) {
            numbers.push(i);
        }
    }

    document.getElementById("output3").innerHTML = numbers.join(", ");
}

function showAllDividers() {
    var num = Number(document.getElementById("num4").value);
    var numbers = [];

    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            numbers.push(i);
        }
    }

    document.getElementById("output4").innerHTML = numbers.join(", ");
}

function createMultiBoard() {
    var board = "<table>";

    // יוצר את השורות של הטבלה
    for (var x = 1; x <= 10; x++) {
        board += "<tr>";

        // יוצר את התאים
        for (var y = 1; y <= 10; y++) {
            board += `<td>${x * y}</td>`;
        }

        board += "</tr>";
    }

    board += "</table>";

    // שם את הטבלה ב-HTML
    document.getElementById("multiBoard").innerHTML = board;
}

function sumNumber() {
    // המספר נקלט כטקסט
    var num = document.getElementById("num5").value;
    var sum = 0;

    for (var i = 0; i < num.length; i++) {
        // ממירים למספר לצורך חיבור
        // (אחרת זה יהיה שרשור)
        sum += Number(num[i]);
    }

    document.getElementById("output5").innerHTML = sum;
}

function showDiv() {
    var num1 = Number(document.getElementById("num6").value);
    var num2 = Number(document.getElementById("num7").value);

    var div = document.getElementById("output6");

    div.style.width = num1 * 10 + 'px';
    div.style.height = num2 * 10 + 'px';
    div.style.border = '1px solid';
    div.style.margin = '8px auto';
    div.style.backgroundColor = 'chartreuse';

    var per = (num1 * 2) + (num2 * 2);

    if (per > 500) {
        div.style.backgroundColor = 'red';
    } else if (per > 400) {
        div.style.backgroundColor = 'green';
    } else if (per > 300) {
        div.style.backgroundColor = 'blue';
    } else if (per > 200) {
        div.style.backgroundColor = 'pink';
    } else if (per > 100) {
        div.style.backgroundColor = 'purple';
    }

    div.innerHTML = `היקף המלבן הוא: <b>${per}</b>`;
}