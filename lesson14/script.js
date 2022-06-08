function timing() {
    var num = document.getElementById("num1").value;
    document.getElementById("output").innerHTML = "טוען..";
    document.getElementById("btn1").disabled = true;

    setTimeout(function() {
        document.getElementById("output").innerHTML = "הצלחתם!";
    }, num * 1000);
}

var interval;

function timer() {
    // איפוס טריגר הטיימר
    clearInterval(interval);
    var num = Number(document.getElementById("num2").value);

    // הצגת ערך הקלט במיידי
    document.getElementById("output2").innerHTML = num;

    // הגדרת הטריגר שמוריד כל שנייה מספר אחד מהמונה
    interval = setInterval(function() {
        document.getElementById("output2").innerHTML = --num;

        // כשהמונה מגיע לאפס, עוצרים את הפונקציה
        if (num == 0) {
            // איפוס טריגר הטיימר
            clearInterval(interval);
            document.getElementById("output2").innerHTML = "הטיימר הסתיים בהצלחה!";
        }
    }, 1000);
}

var isOn = false;
var trafficInterval;

function brokenTrafficLights() {
    // איפוס (ע"מ שלא ייצור כפילויות)
    clearInterval(trafficInterval);

    trafficInterval = setInterval(function() {
        // משנה את הערך הבוליאני
        isOn = !isOn;

        if (isOn) {
            document.getElementById("orange").style.backgroundColor = 'orange';
        } else {
            document.getElementById("orange").style.backgroundColor = '';
        }
    }, 500);
}

function clearTrafficLights() {
    document.getElementById('red2').style.backgroundColor = '';
    document.getElementById('orange2').style.backgroundColor = '';
    document.getElementById('green2').style.backgroundColor = '';
}

function red() {
    clearTrafficLights();

    document.getElementById('red2').style.backgroundColor = 'red';

    setTimeout(redAndOrange, 5 * 1000);
}

function redAndOrange() {
    clearTrafficLights();

    document.getElementById('red2').style.backgroundColor = 'red';
    document.getElementById('orange2').style.backgroundColor = 'orange';

    setTimeout(green, 2 * 1000);
}

function green() {
    clearTrafficLights();

    document.getElementById('green2').style.backgroundColor = 'green';

    setTimeout(orange, 5 * 1000);
}

function orange() {
    clearTrafficLights();

    document.getElementById('orange2').style.backgroundColor = 'orange';

    setTimeout(red, 1000);
}

function clock() {
    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    var str = h + ':' + m + ':' + s;

    document.getElementById('clock').innerHTML = str;

    setTimeout(clock, 1000);
}