function add() {
    document.getElementById('tasks').insertAdjacentHTML('beforeend', `
        <tr>
            <td><input type="text" class="inp"></td>
            <td><button onclick="remove(this)">x</button></td>
        </tr>`);

    var allInputs = document.getElementsByClassName("inp");
    allInputs[allInputs.length - 1].focus();
}

function remove(elem) {
    if (confirm("האם למחוק?")) {
        elem.parentElement.parentElement.remove();
    }
}

// var arr = [];

function addToArray(elem, ev) {
    if (ev.keyCode == 13) {
        // arr.push(elem.value);
        document.getElementById('list').innerHTML += `<li>${elem.value}</li>`;
        elem.value = '';
    }
}