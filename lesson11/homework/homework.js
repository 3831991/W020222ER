var numbers = [8, 5, 6, 8, 9, 7, 8, 10, 13, 15, 8, 65, 54, 85, 96, 85, 45, 65];
var names = ['אביר', 'טובה', 'עודד', 'מזר', 'אלונה', 'יוכבד', 'לב', 'רומי', 'אלינור', 'אנאל', 'שקד', 'גאולית', 'הוד', 'אילת', 'אצילה', 'אליהו', 'בר', 'נוי', 'אביאור', 'דוריאל'];

document.getElementById("numbers").innerHTML = numbers.join(', ');

function showEvens() {
    var num1 = Number(document.getElementById("num1").value);
    document.getElementById("output1").innerHTML = "";

    for (var i = 0; i < num1; i++) {
        if (i % 2 == 0) {
            document.getElementById("output1").innerHTML += i + ", ";
        }
    }
}

function showFactorial() {
    var num2 = Number(document.getElementById("num2").value);
    document.getElementById("output2").innerHTML = "";

    var result = 1;
    var numbers = [];

    for (var i = 1; i <= num2; i++) {
        result *= i;
        numbers.push(i);
    }

    document.getElementById("output2").innerHTML = numbers.join(' x ') + " = " + result;
}

function setResult(x) {
    document.getElementById("output3").innerHTML = x;
}

function big() {
    var res = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > res) {
            res = numbers[i];
        }
    }

    setResult(res);
}

function small() {
    var res = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < res) {
            res = numbers[i];
        }
    }

    setResult(res);
}

function sum() {
    var result = 0;

    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    setResult(result);
}

function avg() {
    var result = 0;

    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    setResult(Math.round(result / numbers.length));
}

function showList() {
    document.getElementById("list").innerHTML = "";

    for (var i = 0; i < names.length; i++) {
        var li = `<li>
                    <label>
                        <input class="wow" type="checkbox" value="${names[i]}"> 
                        ${names[i]}
                    </label>
                </li>`;

        document.getElementById("list").innerHTML += li;
    }
}

function showChecked() {
    // מחזיר את האלמנטים עם הקלאס המוגדר
    var checkboxes = document.getElementsByClassName("wow");
    var checked = [];

    for (var i = 0; i < checkboxes.length; i++) {
        var input = checkboxes[i];

        // אם הצ'קבוקס נבחר
        if (input.checked) {
            checked.push(input.value);
        }
    }

    alert(checked.join(', '));
}

function createMultiBoard() {
    var str = "<table>";

    for (var x = 1; x <= 10; x++) {
        str += "<tr>";

        for (var y = 1; y <= 10; y++) {
            str += `<td>${x * y}</td>`;
        }

        str += "</tr>";
    }

    str += "</table>";

    document.getElementById("multiBoard").innerHTML = str;
}