/**
 * מחלקה לניהול ויצירת טבלה
 * @param elemId מזהה האלמנט שבו נשים את הטבלה
 * @param structure מבנה הטבלה
 * @param data תוכן הטבלה
 */
function Table(elemId, structure, data) {
    let _title;

    const createTable = function() {
        let html = "";

        if (_title) {
            html += `<h1>${_title}</h1>`;
        }

        html += `<table class="table table-striped">`;

        // *********** יצירת כותרות הטבלה ************ //
        html += "<tr>";
        html += `<th>#</th>`;

        for (const s of structure) {
            html += `<th>${s.title}</th>`;
        }

        html += `<th></th>`;
        html += "</tr>";
        // ******************************************** //

        // *********** יצירת תוכן הטבלה ************ //
        let i = 0;

        for (const d of data) {
            html += "<tr>";
            html += `<td>${i + 1}</td>`;

            for (const s of structure) {
                html += `<td>${d[s.key]}</td>`;
            }

            html += `<td><button id="${i}" class="btn btn-danger remove" title="מחק">x</button></td>`;

            html += "</tr>";

            i++;
        }
        // ******************************************** //

        // *********** יצירת שורה להוספת ערכים לטבלה ************ //
        html += "<tr>";
        html += `<td><button class="btn btn-success add">+</button></td>`;

        for (const s of structure) {
            html += `<td><input type="text" id="${s.key}" class="form-control" placeholder="${s.title}"></td>`;
        }

        html += `<td></td>`;
        html += "</tr>";
        // ******************************************** //

        html += "</table>";

        document.getElementById(elemId).innerHTML = html;

        // *********** הוספת אירוע לחיצה על לחצן ההוספה ************ //
        const btn = document.getElementById(elemId).querySelector('.add');

        btn.addEventListener('click', function() {
            const item = {};

            for (const s of structure) {
                const inp = document.getElementById(elemId).querySelector('#' + s.key);
                item[s.key] = inp.value;
            }

            data.push(item);
            createTable();
        });

        // *********** הוספת אירוע לחיצה על לחצן המחיקה ************ //
        const removes = document.getElementById(elemId).querySelectorAll('.remove');

        for (const elem of removes) {
            elem.addEventListener('click', function(ev) {
                if (confirm("האם אתה בטוח כי ברצונך למחוק את השורה הנחמדה שייצרנו?")) {
                    const index = ev.target.id;
                    data.splice(index, 1);
                    createTable();
                }
            });
        }
    }

    // מפעיל את הפונקציה בפעם הראשונה
    createTable();

    // פונקציה להוספת כותרת לטבלה
    this.setTitle = function(title) {
        _title = title;
        createTable();
    }
}

// *********** שימוש במחלקה ליצית טבלה ************ //
const clientStruc = [
    { key: 'firstName', title: 'שם פרטי' },
    { key: 'lastName', title: 'שם משפחה' },
    { key: 'phone1', title: 'טלפון' },
    { key: 'email', title: 'אמייל' },
    { key: 'city', title: 'עיר' },
    { key: 'type', title: 'סוג לקוח' },
];

const table = new Table("output1", clientStruc, clients);
table.setTitle("לקוחות");
// ******************************************** //

const subjectStruc = [
    { key: 'id', title: 'מזהה' },
    { key: 'code', title: 'קוד מקצוע' },
    { key: 'title', title: 'שם המקצוע' },
];

const x = new Table("output2", subjectStruc, subjects);
x.setTitle("רשימת מקצועות");