const maZeMeshane = [];
let isShow = true;

function addToArray(ev) {
    if (ev.key == 'Enter') {
        const inp = document.getElementById("txt");
        maZeMeshane.push(inp.value);
        inp.value = "";
    }
}

function showArray() {
    if (isShow) {
        let list = "";

        for (let i = 0; i < maZeMeshane.length; i++) {
            list += `<li style="font-size: ${(i + 1) * 5}px;">${i + 1}. ${maZeMeshane[i]}</li>`;
        }

        document.getElementById("list").innerHTML = list;
        document.getElementById("btn").innerHTML = 'הסתר';
    } else {
        document.getElementById("list").innerHTML = "";
        document.getElementById("btn").innerHTML = 'הצג';
    }

    isShow = !isShow;
}