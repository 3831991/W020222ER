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

    $('td').click(function() {
        const index = +$(this).attr('id');
        const next = $(this).next();
        const prev = $(this).prev();
        const top = $('td').eq(index - 4);
        const bottom = $('td').eq(index + 4);

        const source = $(this).html();
        let target;

        if (!prev.text() && prev.length) {
            target = prev.html();
            prev.html(source);
        } else if (!next.text() && next.length) {
            target = next.html();
            next.html(source);
        } else if (!top.text() && top.length) {
            target = top.html();
            top.html(source);
        } else if (!bottom.text() && bottom.length) {
            target = bottom.html();
            bottom.html(source);
        }

        if (target) {
            $(this).html(target);
        }
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