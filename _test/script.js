$(() => {
    $.get("tehilim.txt", (res) => {
        const tehilim = JSON.parse(res);
        const temp = $('#frame template').html();

        tehilim.text.forEach((t, i) => {
            const item = $(temp);
            item.find('header').text(`פרק ${getGimatria(i + 1)}`);

            t.forEach((p, i) => {
                item.find('ul').append(`<li><span>${getGimatria(i + 1, false)} </span> ${p}</li>`);
            });

            $('#frame').append(item);
        });
    });
});

function sizePlus() {
    $('#frame *').css("font-size", "+=2");
}

function sizeMinus() {
    $('#frame *').css("font-size", "-=2");
}

const gimatria = [
    { num: 400, char: "ת" },
    { num: 300, char: "ש" },
    { num: 200, char: "ר" },
    { num: 100, char: "ק" },
    { num: 90, char: "צ" },
    { num: 80, char: "פ" },
    { num: 70, char: "ע" },
    { num: 60, char: "ס" },
    { num: 50, char: "נ" },
    { num: 40, char: "מ" },
    { num: 30, char: "ל" },
    { num: 20, char: "כ" },
    { num: 10, char: "י" },
    { num: 9, char: "ט" },
    { num: 8, char: "ח" },
    { num: 7, char: "ז" },
    { num: 6, char: "ו" },
    { num: 5, char: "ה" },
    { num: 4, char: "ד" },
    { num: 3, char: "ג" },
    { num: 2, char: "ב" },
    { num: 1, char: "א" },
];

function getGimatria(number, includeGeresh = true) {
    let str = '';

    for (let obj of gimatria) {
        if (number >= obj.num) {
            const rest = number % obj.num;
            const amount = (number - rest) / obj.num;

            for (let i = 0; i < amount; i++) {
                str += obj.char;
            }

            number = rest;
        }
    }

    if (includeGeresh) {
        if (str.length > 1) {
            str = `${str.slice(0, -1)}"${str.slice(-1)}`;
        } else {
            str += "'";
        }
    }

    return str;
}