const months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
let currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

function createCalendar() {
    const date = new Date(currentYear, currentMonth, 1);
    const year = date.getFullYear();
    const month = date.getMonth();

    document.getElementById("header").innerHTML = months[month] + ' ' + year;

    let startWeek = date.getDay();
    let html = "";
    let day = 1;
    let isRun = true;

    while (isRun) {
        html += "<tr>";

        for (let i = 0; i < 7; i++) {
            if (i >= startWeek || day > 1) {
                html += `<td data-bs-toggle="modal" data-bs-target="#dayModal" onclick="showDay(${year}, ${month}, ${day})">${day}</td>`;
                day++;
            } else {
                html += `<td></td>`;
            }

            const current = new Date(year, month, day);

            if (current.getMonth() != month) {
                isRun = false;
                break;
            }
        }

        html += "</tr>";
    }

    document.getElementById("calendar").innerHTML = html;
}

function prev() {
    currentMonth--;
    createCalendar();
}

function next() {
    currentMonth++;
    createCalendar();
}

function showDay(year, month, date) {
    const d = new Date(year, month, date);
    document.getElementById("titleModal").innerHTML = "יום " + days[d.getDay()];
    document.getElementById("bodyModal").innerHTML = date + " ב" + months[month] + " " + year;
}