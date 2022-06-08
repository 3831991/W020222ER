var names = ['דוריאל', 'אביר', 'טובה', 'עודד', 'מזר', 'אלונה', 'יוכבד', 'לב', 'רומי', 'אלינור', 'אנאל', 'שקד', 'גאולית', 'הוד', 'אילת', 'אצילה', 'אליהו', 'בר', 'נוי', 'אביאור'];

function showList() {
    document.getElementById("list").innerHTML = "";
    var i = 0;

    while (i < names.length) {
        // "<li>" + names[i] + "</li>";
        document.getElementById("list").innerHTML += `<li>${names[i]}</li>`;
        i++;
    }
}

function randName() {
    var random = Math.floor(Math.random() * names.length);
    alert(names[random]);
}