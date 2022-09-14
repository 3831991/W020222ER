const fruits = [
    "אגס",
    "תפוז",
    "דובדבן",
    "תפוח",
    "לימון",
    "אננס",
    "בננה",
    "ענבים",
    "אבטיח",
];

const btn = `<button onclick="removeItem(this)">x</button>`;

function removeItem(btn) {
    // קודם שמרנו את אלמנט האב
    const p = $(btn).parent();
    // מחקנו את הכפתור
    $(btn).remove();

    // אנחנו מוחקים את זה מהמערך, ע"מ שנוכח להוסיף מוצר זהה
    const text = p.text();
    const i = fruits.indexOf(text);
    fruits.splice(i, 1);

    // מחקנו את אלמנט האב
    p.remove();
}

$(function() {
    // הפעלת אירוע על המשימה הרשונה
    $("#task1 input").on('input', function() {
        const num = +$(this).val();

        if (!num) {
            $(this).siblings('output').val('');
            return;
        }

        if (num <= 2) {
            $(this).siblings('output').val("ראשוני");
            return;
        }

        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                $(this).siblings('output').val("לא ראשוני");
                return;
            }
        }

        $(this).siblings('output').val("ראשוני");
    });

    $("#task2 input").on('input', function() {
        const num = +$(this).val();
        const numbers = [];

        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                numbers.push(i);
            }
        }

        $(this).siblings('output').val(numbers.join(', '));
    });

    for (const f of fruits) {
        $("#task3 ul").append(`<li>${f}${btn}</li>`);
    }

    $("#task3 ul").hide().slideDown(3333);

    $("#task3 input").keyup(function(ev) {
        if (ev.keyCode != 13) {
            return;
        }

        const val = $(this).val();

        if (!val) {
            return;
        }

        if (fruits.includes(val)) {
            $(this).val('');
            alert("המוצר כבר קיים ידביל!");
            return;
        }

        fruits.push(val);
        $("#task3 ul").append(`<li>${val}${btn}</li>`);
        $(this).val('');
    });
});