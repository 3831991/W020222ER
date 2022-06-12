let numbers = [];
let strings = [];

function arrChange() {
    // יצירת המערך של המספרים
    const inputs1 = document.querySelectorAll(".arr1 input");
    numbers = [];

    for (const input of inputs1) {
        if (input.value) {
            numbers.push(Number(input.value));
        }
    }

    // יצירת המערך של הטקסטים
    const inputs2 = document.querySelectorAll(".arr2 input");
    strings = [];

    for (const input of inputs2) {
        if (input.value) {
            strings.push(input.value);
        }
    }
}

function sum(numbers) {
    let result = 0;

    for (const num of numbers) {
        result += num;
    }

    return result;
}

function avg(numbers) {
    let result = 0;

    for (const num of numbers) {
        result += num;
    }

    return result / numbers.length;
}

function margeArray(arr1, arr2) {
    return arr1.concat(arr2);
}

function longStr(strings) {
    let res = '';

    for (const str of strings) {
        if (str.length > res.length) {
            res = str;
        }
    }

    return res;
}

function isArrEqual(arr) {
    const first = arr[0];

    for (const x of arr) {
        if (x !== first) {
            return false;
        }
    }

    return true;
}

function getBetween(num1, num2) {
    const numbers = [];

    for (let i = num1 + 1; i < num2; i++) {
        numbers.push(i);
    }

    return numbers;
}

function getRandom(arr) {
    const rand = Math.floor(Math.random() * arr.length);

    return arr[rand];
}

function getFirstAndLast(arr) {
    return [arr[0], arr[arr.length - 1]];
}

function upper(strings) {
    const result = [];

    for (const text of strings) {
        const first = text[0].toUpperCase();
        result.push(first + text.slice(1));
    }

    return result;
}

function getMaZeMeshane(strings, minLength = 6) {
    const result = [];

    for (const text of strings) {
        if (text.length > minLength) {
            result.push(text);
        }
    }

    return result;
}

// function margeArray(...arrays) {
//     return [].concat(...arrays);
// }