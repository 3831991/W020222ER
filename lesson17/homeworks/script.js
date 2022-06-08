function createTable() {
    var str = "";

    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];

        str += `<tr onclick="selectTr(this)">
            <td>${i}</td>
            <td>${car.number}</td>
            <td>${car.manufacturer}</td>
            <td>${car.name}</td>
            <td>${car.model}</td>
            <td>${car.km}</td>
            <td>${car.firstName} ${car.lastName}</td>
            <td>
                <button class="removeBtn" onclick="removeTr(this)">x</buttton>
                <button class="restoreBtn" onclick="restoreTr(this)">שחזר</buttton>
            </td>
        </tr>`;
    }

    document.getElementById("list").innerHTML = str;
}

function selectTr(elem) {
    if (elem.style.backgroundColor == 'purple') {
        elem.style.backgroundColor = "";
    } else {
        elem.style.backgroundColor = "purple";
    }
}

function removeTr(elem) {
    if (confirm("האם למחוק?")) {
        var tr = elem.parentElement.parentElement;
        document.getElementById("trash").innerHTML += tr.outerHTML;
        tr.remove();
        snackbar("הנתון נמחק בהצלחה");
    }
}

function restoreTr(elem) {
    var tr = elem.parentElement.parentElement;
    document.getElementById("list").innerHTML += tr.outerHTML;
    tr.remove();
    snackbar("הנתון שוחזר בהצלחה");
}

var myTimeout;

function snackbar(text) {
    clearTimeout(myTimeout);
    var elem = document.getElementById("alert");

    elem.innerHTML = text;
    elem.style.display = "block";

    myTimeout = setTimeout(function() {
        elem.style.display = "none";
    }, 3 * 1000);
}