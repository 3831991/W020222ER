function rand() {
    var names = document.getElementById('text').value;
    var arr = names.split('\n');
    var rand = Math.floor(Math.random() * arr.length);

    document.getElementById('output').innerHTML = arr[rand];
}

function add() {
    document.getElementById('list').innerHTML += `
        <tr>
            <td><input type="text"></td>
            <td><button onclick="remove(this)">x</button></td>
        </tr>`;
}

// הוספנו את זה אחרי השיעור
function remove(elem) {
    elem.parentElement.parentElement.remove();
}