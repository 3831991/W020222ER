let isCompleted = false;

$(function() {
    createBoard();
    cheat();
});

function createBoard() {
    const numbers = [];

    for (let i = 1; i <= 16; i++)
        numbers.push(i);

    $('td').each(function(i) {
        const rand = Math.floor(Math.random() * numbers.length);
        const num = numbers[rand];
        numbers.splice(rand, 1);

        $(this).attr('id', i);

        if (num == 16) {
            $(this).html(`<div></div>`);
        } else {
            $(this).html(`<div>${num}</div>`);
        }
    });

    $('td').click(function() {
        if (isCompleted) {
            return;
        }

        const index = +$(this).attr('id');
        const source = $(this).html();

        // שולף את כל הכיוונים האפשריים
        const options = [
            $(this).next(),
            $(this).prev(),
            $('td').eq(index - 4),
            $('td').eq(index + 4)
        ];

        options.forEach(elem => {
            if (elem.length && !elem.text()) {
                elem.html(source);
                $(this).html('<div></div>');
            }
        });

        checkIsCompleted();
    });

    $('td').hover(function() {
        if (isCompleted) {
            return;
        }

        const index = +$(this).attr('id');

        const options = [
            $(this).next(),
            $(this).prev(),
            $('td').eq(index - 4),
            $('td').eq(index + 4)
        ];

        $('td div').removeClass('free');

        options.forEach(elem => {
            if (elem.length && !elem.text()) {
                $(elem).children().addClass('free');
            }
        });
    });
}

function checkIsCompleted() {
    let isOrder = true;

    $('td').each(function(i) {
        const val = $(this).text();
        const num = i + 1;

        if (val != num && num != 16) {
            isOrder = false;
            return;
        }
    });

    if (isOrder) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        isCompleted = true;

        $('.gameOver').show();
    }
}

/**
 * פונקציה המסדרת את הפאזל
 */
function cheat() {
    let keyUpCounter = 0;
    let keyUpTimeout;

    $('body').keyup(function(ev) {
        // רק אם לחצו על P
        // 80 מייצג את P
        if (ev.keyCode == 80) {
            keyUpCounter++;
            // מנקה את הטיימינג
            clearTimeout(keyUpTimeout);

            // אם היו 5 לחיצות בזמן הנתון
            if (keyUpCounter === 5) {
                // מייצר את הטבלה לפי הסדר
                $('td').each(function(i) {
                    const num = i + 1;
                    $(this).attr('id', i);

                    if (num == 16) {
                        $(this).html(`<div></div>`);
                    } else {
                        $(this).html(`<div>${num}</div>`);
                    }
                });

                checkIsCompleted();

                // מאפס את המונה
                keyUpCounter = 0;
            }

            // אם עברה חצי שנייה ללא לחיצה על הכפתו הנכון - המונה מתאפס
            keyUpTimeout = setTimeout(() => {
                keyUpCounter = 0;
            }, 500);
        }
    });
}