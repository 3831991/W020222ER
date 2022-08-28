let isFirstPlayer = true;
const firstPlayer = [];
const secondPlayer = [];

$(function() {
    $.get("getImages.php", function(res) {
        const imageList = JSON.parse(res);
        const images = [...imageList, ...imageList];
        const temp = $(".board template").html();

        while (images.length) {
            const rand = Math.floor(Math.random() * images.length);
            const path = images[rand];
            images.splice(rand, 1);

            const elem = $(temp);
            elem.css("background-image", `url('images/${path}')`);
            elem.attr("id", path);
            $(".board").append(elem);
        }

        // פונקצית ג'יקוארי המופעלת בלחיצה על הקלפים
        $(".imgFrame").click(function() {
            // אם הקלף כבר מוצג, תתעלם מהפונקציה
            if ($(this).hasClass('showed')) {
                return;
            }

            // מביא את כל הקלפים המוצגים
            const showed = $(".imgFrame.showed");

            // אם אין עדיין 2 קלפים שמוצגים - הצג את הקלף
            if (showed.length < 2) {
                $(this).addClass('showed');
            }

            // אם בלחיצה היה כבר קלף אחד, כלומר, כרגע יש 2 קלפים מוצגים
            if (showed.length) {
                const card1 = $(".imgFrame.showed").first();
                const card2 = $(".imgFrame.showed").last();

                // אם הקלפים המוצגים זההים
                if (card1.attr('id') == card2.attr('id')) {
                    // בודק של מי התור
                    if (isFirstPlayer) {

                    } else {

                    }
                } else {
                    // הופך במחזרה את הקלפים
                    setTimeout(function() {
                        $('.imgFrame').removeClass('showed');
                    }, 1000 * 3);
                }

                // מחליף בין התורות
                isFirstPlayer = !isFirstPlayer;
            }
        });
    });
});