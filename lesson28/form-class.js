/**
 * מחלקה לניהול ויצרת טפסים
 * @param elemId איפה להציג את הטופס
 * @param title כותרת הטופס
 * @param structure מבנה הטופס
 */
function Form(elemId, title, structure) {
    let obj = {};

    let html = `<div class="card">`;
    html += `<h1>${title}</h1>`;

    structure.forEach(item => {
        html += `<div class="mb-3">
                    <label class="form-label">${item.name}</label>
                    <input id="${item.key}" type="${item.type}" class="form-control">
                </div>`;
    });

    html += `<br><button id="submit" class="btn btn-success">שלח</button>`;

    html += `</div>`;

    const elem = document.getElementById(elemId);

    elem.innerHTML = html;

    elem.querySelector('#submit').addEventListener('click', () => {
        obj = {};

        structure.forEach(item => {
            obj[item.key] = elem.querySelector("#" + item.key).value;
        });

        elem.innerHTML = `<div class="card">
                            <h1>${title}</h1>
                            <p>הטופס נשלח בהצלחה...</p>
                        </div>`;
    });

    this.getData = () => {
        return obj;
    };
}