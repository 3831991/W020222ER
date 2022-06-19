function Gallery(id, images, timing = 2) {
    // מגדיר משתנה של הגלרייה ע"פ ה-ID שקיבלנו
    const elem = document.getElementById(id);
    let html = "";
    let i = -1;
    let interval;

    // מייצר HTML של התמונות
    for (const img of images) {
        html += `<img src="${img}">`;
    }

    // מוסיף את התמונות לאלמנט
    elem.innerHTML = html;
    elem.classList.add("gallery");

    // מוסיף לגלרייה לחצנים
    elem.innerHTML += `
        <button class="btn right"><</button>
        <button class="btn left">></button>
    `;

    // פונקציה האחראית להציג את התמונה הבאה
    this.next = function() {
        clearInterval(interval);
        i++;

        if (i >= images.length) {
            i = 0;
        }

        const imageList = document.querySelectorAll(`#${id} img`);

        for (const elem of imageList) {
            elem.classList.remove("current");
        }

        imageList[i].classList.add("current");
        interval = setInterval(this.next, timing * 1000);
    }

    // פונקציה האחראית להציג את התמונה הקודמת
    this.prev = function() {
        clearInterval(interval);
        i--;

        if (i < 0) {
            i = images.length - 1;
        }

        const imageList = document.querySelectorAll(`#${id} img`);

        for (const elem of imageList) {
            elem.classList.remove("current");
        }

        imageList[i].classList.add("current");
        interval = setInterval(this.prev, timing * 1000);
    }

    // הוספת אירוע למעבר לתמונה הבאה בלחיצה עם העכבר
    document.querySelector(`#${id} .right`).addEventListener('click', this.next);
    document.querySelector(`#${id} .left`).addEventListener('click', this.prev);

    // בכדי להציג בהתחלה את התמונה הראשונה
    this.next();

    interval = setInterval(this.next, timing * 1000);
}

const gallery1 = new Gallery("g1", [
    "images/img (1).jpg",
    "images/img (2).jpg",
    "images/img (3).jpg",
    "images/img (4).jpg",
    "images/img (5).jpg",
], 5);

// gallery1.


const gallery2 = new Gallery("g2", [
    "images/img (6).jpg",
    "images/img (7).jpg",
    "images/img (8).jpg",
    "images/img (9).jpg",
    "images/img (10).jpg",
], 5);


const gallery3 = new Gallery("g3", [
    "images/img (1).jpg",
    "images/img (2).jpg",
    "images/img (3).jpg",
    "images/img (4).jpg",
    "images/img (5).jpg",
]);