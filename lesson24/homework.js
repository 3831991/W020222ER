const letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת"];

function createTable() {
    let table = "";

    for (let x = 0; x < 10; x++) {
        table += '<tr>';

        for (let y = 0; y < 10; y++) {
            const rand = Math.floor(Math.random() * letters.length);
            table += `<td>${letters[rand]}</td>`;
        }

        table += '</tr>';
    }

    document.querySelector('#lettersTable').innerHTML = table;
}

function biggerImageSize() {
    document.querySelector('#img').width += 25;
}

function move(ev) {
    const elem = document.querySelector("#circle");

    elem.style.top = (ev.y - 50) + 'px';
    elem.style.left = (ev.x - 50) + 'px';
}

function replaceColor() {
    let x = 0;

    setInterval(function() {
        document.querySelector("#circle2").style.backgroundColor = `hsl(${x}, 75%, 47%)`;
        x += 30;
    }, 1000);
}