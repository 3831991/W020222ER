function showBelowNumber() {
    const num = +document.querySelector("#t1 input").value;
    document.querySelector("#t1 .output").innerHTML = "";

    for (let i = 1; i <= num; i++) {
        document.querySelector("#t1 .output").innerHTML += i + ', ';
    }
}

function convertToDollar() {
    const num = +document.querySelector("#t2 input").value;

    document.querySelector("#t2 .output").innerHTML = (num * 3.46) + ' $';
}

function showBiggerDate() {
    const date1 = document.querySelector("#date1").value;
    const date2 = document.querySelector("#date2").value;

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    if (+d1 == +d2) {
        document.querySelector("#t3 .output").innerHTML = "הם שווים";
    } else if (d1 > d2) {
        document.querySelector("#t3 .output").innerHTML = date1.split('-').reverse().join('/');
    } else {
        document.querySelector("#t3 .output").innerHTML = date2.split('-').reverse().join('/');
    }
}

function showBetweenDate() {
    const date1 = document.querySelector("#t4 #date1").value;
    const date2 = document.querySelector("#t4 #date2").value;
    document.querySelector("#t4 .output").innerHTML = "";

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    for (let d = d1; d <= d2; d.setDate(d.getDate() + 1)) {
        const val = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        document.querySelector("#t4 .output").innerHTML += val + "<br>";
    }
}