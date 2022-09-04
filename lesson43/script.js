// פונקציה המובעלת בסיום טעינת הדף
$(function() {
    // קוראים למסמך שבשרת המכיל את האובייקט
    $.get("clients.txt", function(res) {
        // הופכים את הג'ייסון לאובייקט
        const clients = JSON.parse(res);
        // מקבלים את התבנית כטקסט
        const temp = $('#frame template').html();

        clients.slice(0, 50).forEach(c => {
            // יצירת אובייקט מהתבנית
            const accord = $(temp);

            // משנים את הנתונים בהתאם לאובייקט
            accord.find('header').text(c.fullName);
            accord.find('#fullName').append(c.fullName);
            accord.find('#personId').append(c.personId);
            accord.find('#email').append(c.email);
            accord.find('#phone').append(c.phone);

            // מוסיפים את האלמנט החדש שיצרנו
            $('#frame').append(accord);
        });

        // פונקציה המופעל בלחיצה על כל אחד
        $('.accordion').click(function() {
            // בודקים האם המצב שלו מוצג או מוסתר
            const isVisible = $(this).find('.content').is(":visible");
            // סוגרים את כל האקורדיונים
            $('.accordion .content').slideUp();

            if (isVisible) {
                $(this).find('.content').slideUp();
            } else {
                $(this).find('.content').slideDown();
            }
        });

        $('.accordion button').click(function() {
            $(this).parents('.accordion').remove();
        });
    });
});