function getData() {
    const http = new XMLHttpRequest();

    http.onload = () => {
        const arr = JSON.parse(http.responseText);
        document.querySelector("#output").innerHTML = arr.map(x => `<li>${x.firstName} ${x.lastName}</li>`).join('');
    }

    const limit = document.querySelector("#limit").value;
    let url = "data.php";

    if (limit) {
        url += `?limit=${limit}`;
    }

    http.open("GET", url);
    http.send();
}