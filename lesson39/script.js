function addUser() {
    let firstName, lastName;

    do {
        firstName = prompt("נא להזין את השם הפרטי של הלקוח");
    } while (!firstName)

    do {
        lastName = prompt("נא להזין את שם המשפחה של הלקוח");
    } while (!lastName)

    const html = $('table template').html();
    tr = $(html);

    const len = $('tr').length;

    tr.children('#num').text(len);
    tr.children('#firstName').text(firstName);
    tr.children('#lastName').text(lastName);

    $("table").append(tr);
}

function remove(elem) {
    $(elem).parents('tr').remove();
}

$(function() {
    $('img').click(function() {
        // $(this).fadeOut(1000);
        $(this).toggleClass('kuku');
        // document.querySelector("audio").play();
    });
});