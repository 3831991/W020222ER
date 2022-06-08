function wow() {
    var input = document.getElementById("name");
    var name = input.value;

    alert("שלום " + name);
}

function wow2() {
    var inp = document.getElementById("name");
    var name = inp.value;

    var x = document.getElementById("output");
    x.innerHTML = "שלום " + name;
}