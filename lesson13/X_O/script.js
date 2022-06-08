var isX = true; // מגדיר של מי התור
var winner = ''; // מגדיר מי המנצח

// צירופי ניצחון
var options = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function clickOn(elem) {
    // אם יש מנצח או שנלחץ תא עם ערך, זה מתעלם מהפונקציה
    if (winner || elem.innerHTML) {
        return;
    }

    // רושם בתא איקס או עיגול (בהתאם לתור)
    elem.innerHTML = isX ? 'X' : 'O';

    // מחליף את התורים
    isX = !isX;

    // מערך של כל התאים בטבלה
    var tds = document.getElementsByTagName('td');

    // רץ על כל מערכי הצירופים במערך
    for (var x = 0; x < options.length; x++) {
        // מערך נוכחי של אופציות
        var opt = options[x];

        // לצורך בדיקה האם כל התאים לפי הצירוף זהים
        // [הגדרנו את הערך הראשון מהערך של הצירוף כברירת מחדל]
        var first = tds[opt[0]].innerHTML;

        // מונה לצורך בדיקה האם כל הערכים בצירוף הנוכחי תואמים
        var counter = 0;

        // רץ על המערך הפנימי של האופציות
        for (var y = 0; y < opt.length; y++) {
            // אינדקס של תא ספציפי ע"פ הצירופים
            var num = opt[y];

            // תא
            var td = tds[num];

            // שובר את הלולאה אם התא ריק או שהוא לא שווה לתא הראשון
            if (!td.innerHTML || first != td.innerHTML) {
                break;
            }

            // אם הסקריפט הגיע עד לכאן הוא מקדם את המונה
            counter++;
        }

        // אם המונה שווה לאורך המערך, יש לנו מנצח
        if (counter == opt.length) {
            winner = first;
            document.getElementById("output").innerHTML = first + " המנצח!";
        }
    }
}

// שיטה ארוכה
// function clickOn(elem) {
//     if (isX) {
//         elem.innerHTML = 'X';
//         isX = false;
//     } else {
//         elem.innerHTML = 'O';
//         isX = true;
//     }
// }