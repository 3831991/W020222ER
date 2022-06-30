let width = 100;
let bigger = 50;

function circleClick() {
    if (width >= 500) {
        bigger = -50;
    } else if (width <= 100) {
        bigger = 50;
    }

    width += bigger;

    const circle = document.querySelector('.circle');
    circle.style.width = width + 'px';
    circle.style.height = width + 'px';
    circle.innerHTML = width + 'px';

    if (width == 250) {
        circle.style.backgroundColor = 'green';
    } else if (width >= 400) {
        circle.style.backgroundColor = 'red';
    } else {
        circle.style.backgroundColor = '';
    }

    if (width == 500) {
        circle.style.borderRadius = 0;
    } else {
        circle.style.borderRadius = '';
    }
}

// elemId, title, structure
const contact = new Form('contact-form', 'טופס יצירת קשר', [
    { type: 'text', key: 'firstName', name: 'שם פרטי' },
    { type: 'text', key: 'lastName', name: 'שם משפחה' },
    { type: 'tel', key: 'phone', name: 'טלפון' },
    { type: 'number', key: 'id', name: 'ת.ז.' },
]);

const pizza = new Form('pizza-form', 'טופס הזמנת פיצה', [
    { type: 'text', key: 'firstName', name: 'שם פרטי' },
    { type: 'text', key: 'lastName', name: 'שם משפחה' },
    { type: 'tel', key: 'phone', name: 'טלפון' },
    { type: 'number', key: 'id', name: 'ת.ז.' },
    { type: 'text', key: 'city', name: 'עיר' },
]);