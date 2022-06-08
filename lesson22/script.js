function showTable() {
    // שמנו + בהתחלה ע"מ שזה יהפוך למספר
    const num = +document.querySelector("#num1").value;

    let html = "";

    for (let x = 1; x <= num; x++) {
        html += "<tr>";

        for (let y = 1; y <= num; y++) {
            html += `<td></td>`;
        }

        html += "</tr>";
    }

    document.querySelector("#table1").innerHTML = html;
}