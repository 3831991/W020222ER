$(function() {
    createBoard();
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

    // $('td').click(function() {
    //     const index = +$(this).attr('id');

    //     // שולף את כל הכיוונים האפשריים
    //     const next = $(this).next();
    //     const prev = $(this).prev();
    //     const top = $('td').eq(index - 4);
    //     const bottom = $('td').eq(index + 4);

    //     // הערך שקיים בתא שנלחץ
    //     const source = $(this).html();
    //     let target;

    //     // בודק האם קיים התא בכיוון הנדון, והאם הוא ריק
    //     if (prev.length && !prev.text()) {
    //         target = prev;
    //     } else if (next.length && !next.text()) {
    //         target = next;
    //     } else if (top.length && !top.text()) {
    //         target = top;
    //     } else if (bottom.length && !bottom.text()) {
    //         target = bottom;
    //     }

    //     // אם קיים התא הוא מחליף בין הערכים של התא שנלחץ לתא המתאים
    //     if (target) {
    //         target.html(source);
    //         $(this).html('<div></div>');
    //     }
    // });

    $('td').click(function() {
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
    });
}

function isCompleted() {
    let isOrder = true;

    $('td').each(function(i) {
        const val = $(this).text();
        const num = i + 1;

        if (val != num && num != 16) {
            isOrder = false;
            return;
        }
    });

    return isOrder;
}

// function salary() {
//     const userName = $('#userName').val();
//     const salary = +$('#salary').val();

//     const update_10 = salary * 1.1;
//     const update_5 = salary * 1.05;

//     if (update_10 > 6000) {
//         console.log(update_5)
//     } else {
//         console.log(update_10)
//     }
// }

// function macabi() {
//     const age = +$('#age').val();
//     const height = +$('#height').val();

//     if (((age >= 14 && age <= 18) || (age >= 21 && age <= 26)) && height >= 182) {
//         console.log("התקבל")
//     } else {
//         console.log("לא התקבל")
//     }
// }