// מביא לנו בתוך מערך את כל התאים שבטבלה
// document.querySelectorAll('td')

// לולאה שרצה על מערכים
// במקרה שלנו היא מביאה לנו כל פעם תא אחר מהטבלה
// .forEach(myTdElem => {  })

// מגדיר של מי התור
let isX = true;
let isFinish = false;

document.querySelector("#message").innerHTML = "התור כרגע של: " + (isX ? 'X' : 'O');

document.querySelectorAll('td').forEach(myTdElem => {
    // נרשם לאירוע onclick
    // זה נרשם על כל אלמנט בנפרד
    myTdElem.addEventListener('click', (ev) => {
        // אם יש כבר ערך בתא, זה עוצר את הפונקציה
        if (ev.target.innerHTML || isFinish) {
            return;
        }

        // שם ערך בתא לפי התור
        if (isX) {
            ev.target.innerHTML = "X";
        } else {
            ev.target.innerHTML = "O";
        }

        // אופציה נוספת להשמת הערכים
        // ev.target.innerHTML = isX ? "X" : "O";

        // מחליף בין התורות
        isX = !isX;

        // כותב של מי התור כרגע
        document.querySelector("#message").innerHTML = "התור כרגע של: " + (isX ? 'X' : 'O');

        whoWon();
    });
});

function finish(td1, td2, td3) {
    td1.style.backgroundColor = "#673ab7";
    td2.style.backgroundColor = "#673ab7";
    td3.style.backgroundColor = "#673ab7";

    td1.style.color = "white";
    td2.style.color = "white";
    td3.style.color = "white";

    document.querySelector("#message").innerHTML = td1.innerHTML + " ניצח!!!!!!";
    isFinish = true;
}

function whoWon() {
    const tds = document.querySelectorAll('td');

    // השורה הראשונה
    const t1 = tds[0];
    const t2 = tds[1];
    const t3 = tds[2];

    // השורה השנייה
    const t4 = tds[3];
    const t5 = tds[4];
    const t6 = tds[5];

    // השורה השלישית
    const t7 = tds[6];
    const t8 = tds[7];
    const t9 = tds[8];

    // בודק האם השורה הראשונה זהה
    // וכמו בהמשך, הוא גם בודק האם קיים ערך באחד התאים
    if (t1.innerHTML && t1.innerHTML == t2.innerHTML && t2.innerHTML == t3.innerHTML) {
        finish(t1, t2, t3);
    }
    // בודק האם השורה השנייה זהה
    else if (t4.innerHTML && t4.innerHTML == t5.innerHTML && t5.innerHTML == t6.innerHTML) {
        finish(t4, t5, t6);
    }
    // בודק האם השורה השלישית זהה
    else if (t7.innerHTML && t7.innerHTML == t8.innerHTML && t8.innerHTML == t9.innerHTML) {
        finish(t7, t8, t9);
    }
    // בודק האם העמודה הראשונה זהה
    else if (t1.innerHTML && t1.innerHTML == t4.innerHTML && t4.innerHTML == t7.innerHTML) {
        finish(t1, t4, t7);
    }
    // בודק האם העמודה השנייה זהה
    else if (t2.innerHTML && t2.innerHTML == t5.innerHTML && t5.innerHTML == t8.innerHTML) {
        finish(t2, t5, t8);
    }
    // בודק האם העמודה השלישית זהה
    else if (t3.innerHTML && t3.innerHTML == t6.innerHTML && t6.innerHTML == t9.innerHTML) {
        finish(t3, t6, t9);
    }
    // בודק האם האלכסון הראשון זהה
    else if (t1.innerHTML && t1.innerHTML == t5.innerHTML && t5.innerHTML == t9.innerHTML) {
        finish(t1, t5, t9);
    }
    // בודק האם האלכסון השני זהה
    else if (t3.innerHTML && t3.innerHTML == t5.innerHTML && t5.innerHTML == t7.innerHTML) {
        finish(t3, t5, t7);
    }
}