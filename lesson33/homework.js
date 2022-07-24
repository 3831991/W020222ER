function isEven() {
    const num = +document.querySelector("#t1 input").value;
    const output = document.querySelector("#t1 .output");

    // אם השארית שווה לאפס, זה אומר שהמספר זוגי
    if (num % 2 == 0) {
        output.innerHTML = "המספר זוגי";
        output.style.color = "blue";
    } else {
        output.innerHTML = "המספר אי זוגי";
        output.style.color = "red";
    }
}

function isPrime() {
    const num = +document.querySelector("#t2 input").value;
    const output = document.querySelector("#t2 .output");

    let isPrime = true;

    // עובר על כל המספרים מ-2 עד 1 מתחת למספר עצמו, ע"מ לבדוק האם המספר מתחלק במספרים אחרים, וכך למעשה הוא אינו ראשוני
    for (let i = 2; i < num; i++) {
        // אם השארית שווה ל-0, זה אומר שהמספר מתחלק ללא שארית וכך למעשה הוא אינו ראשוני
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        output.innerHTML = "המספר ראשוני";
        output.style.color = "blue";
    } else {
        output.innerHTML = "המספר לא ראשוני";
        output.style.color = "red";
    }
}

function isLowerPrime() {
    const num = +document.querySelector("#t3 input").value;
    const output = document.querySelector("#t3 .output");
    const numbers = [];

    // רץ על כל המספרים על למספר עצמו, ע"מ לבדוק כל אחד מהם האם הוא ראשוני
    for (let n = 1; n < num; n++) {
        let isPrime = true;

        // ראה הסבר בתיעוד של הפונקציה הקודמת
        for (let i = 2; i < n; i++) {
            // ראה הסבר בתיעוד של הפונקציה הקודמת
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }

        // אם המספר ראשוני, הוא מוסיף אותו למערך
        if (isPrime) {
            numbers.push(n);
        }
    }

    output.innerHTML = numbers.join(', ');
}

function replace() {
    const num1 = document.querySelector("#t4 .inp1").value;
    const num2 = document.querySelector("#t4 .inp2").value;

    document.querySelector("#t4 .inp1").value = num2;
    document.querySelector("#t4 .inp2").value = num1;

    // אופציה נוספת
    // const inp1 = document.querySelector("#t4 .inp1");
    // const inp2 = document.querySelector("#t4 .inp2");

    // const temp1 = inp1.value;
    // const temp2 = inp2.value;

    // inp1.value = temp2;
    // inp2.value = temp1;
}

function showAzeret() {
    const num = +document.querySelector("#t5 input").value;
    const output = document.querySelector("#t5 .output");
    const numbers = [];
    let result = 1;

    for (let i = 1; i <= num; i++) {
        numbers.push(i);
        result *= i;
    }

    output.innerHTML = numbers.join(" x ") + " = " + result;
}

const numbers = [8, 5, 6, 8, 9, 7, 8, 10, 13, 15, 8, 65, 54, 85, 96, 85, 45, 65];

function showBig() {
    let res = numbers[0];

    for (const num of numbers) {
        if (num > res) {
            res = num;
        }
    }

    document.querySelector("#t6 .output").innerHTML = res;
}

function showSmall() {
    let res = numbers[0];

    for (const num of numbers) {
        if (num < res) {
            res = num;
        }
    }

    document.querySelector("#t6 .output").innerHTML = res;
}

function sum() {
    let res = 0;

    for (const num of numbers) {
        res += num;
    }

    document.querySelector("#t6 .output").innerHTML = res;

    // numbers.reduce((prevNum, num) => prevNum + num, 0);
}

function avarage() {
    let res = 0;

    for (const num of numbers) {
        res += num;
    }

    document.querySelector("#t6 .output").innerHTML = Math.round(res / numbers.length);
}

function startInterval() {
    const amount = 20;
    let html = "";

    for (let i = 0; i < amount; i++) {
        html += '<td></td>';
    }

    document.querySelector("#t7 tr").innerHTML = html;

    let tdIndex = 0;
    let added = 1;

    setInterval(() => {
        const tds = document.querySelectorAll("#t7 td");

        tds.forEach(x => x.classList.remove('active'));
        tds[tdIndex].classList.add('active');

        if (tdIndex >= amount - 1) {
            added = -1;
        } else if (tdIndex <= 0) {
            added = 1;
        }

        tdIndex += added;
    }, 10);
}