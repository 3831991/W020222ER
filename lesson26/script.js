/**
 * מחלקה לניהול ויצירת טבלה
 * @param elemId מזהה האלמנט שבו נשים את הטבלה
 * @param structure מבנה הטבלה
 * @param data תוכן הטבלה
 */
function Table(elemId, structure, data) {
    const createTable = function(title) {
        let html = "";

        if (title) {
            html += `<h1>${title}</h1>`;
        }

        html += `<table class="table table-striped">`;

        // *********** יצירת כותרות הטבלה ************ //
        html += "<tr>";
        html += `<th>#</th>`;

        for (const s of structure) {
            html += `<th>${s.title}</th>`;
        }

        html += "</tr>";
        // ******************************************** //

        // *********** יצירת תוכן הטבלה ************ //
        let i = 1;

        for (const d of data) {
            html += "<tr>";
            html += `<td>${i++}</td>`;

            for (const s of structure) {
                html += `<td>${d[s.key]}</td>`;
            }

            html += "</tr>";
        }
        // ******************************************** //

        // *********** יצירת שורה להוספת ערכים לטבלה ************ //
        html += "<tr>";
        html += `<td><button class="btn btn-success">+</button></td>`;

        for (const s of structure) {
            html += `<td><input type="text" id="${s.key}" class="form-control" placeholder="${s.title}"></td>`;
        }

        html += "</tr>";
        // ******************************************** //

        html += "</table>";

        document.getElementById(elemId).innerHTML = html;
    }

    // מפעיל את הפונקציה בפעם הראשונה
    createTable();

    // פונקציה להוספת כותרת לטבלה
    this.setTitle = function(title) {
        createTable(title);
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