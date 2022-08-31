// מגדיר של מי התור
let isFirstPlayer = true;
// מגדיר האם הוא בתהליך
let isProcessing = false;

// מערך של שחקן א
const firstPlayer = [];
// מערך של שחקן ב
const secondPlayer = [];

// פונקציה המופעלת בעת סיום טעינת הדף
$(function() {
    // פונקצית אג'אקס מסוג גט של ג'יקוארי
    // לצורך קבלת רשימת התמונות מהשרת
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

        updateScore();

        // פונקצית ג'יקוארי המופעלת בלחיצה על הקלפים
        $(".imgFrame").click(function() {
            // אם הקלף כבר מוצג, תתעלם מהפונקציה
            // בנוסף אם הוא בתהליך, התעלם מהפונקציה
            if ($(this).hasClass('showed') || isProcessing) {
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
                isProcessing = true;
                const card1 = $(".imgFrame.showed").first();
                const card2 = $(".imgFrame.showed").last();

                // אם הקלפים המוצגים זההים
                if (card1.attr('id') == card2.attr('id')) {
                    // בודק של מי התור
                    if (isFirstPlayer) {
                        firstPlayer.push(card1.attr('id'));
                        snackbar('שחקן 1 הצליח להתאים בין הקלפים הנ"ל!!');
                    } else {
                        secondPlayer.push(card1.attr('id'));
                        snackbar('שחקן 2 הצליח להתאים בין הקלפים הנ"ל!!');
                    }

                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });

                    setTimeout(function() {
                        $(".imgFrame.showed").addClass('usedCard').removeClass('showed');
                        updateScore();
                    }, 1000 * 2);
                } else {
                    // הופך במחזרה את הקלפים
                    setTimeout(function() {
                        $('.imgFrame').removeClass('showed');
                        updateScore();
                    }, 1000 * 2);

                    snackbar('אין התאמה בין הקלפים');

                    // מחליף בין התורות
                    isFirstPlayer = !isFirstPlayer;
                }
            }
        });

        // מציג את הזוג
        $(".imgFrame").hover(function() {
            const id = $(this).attr('id');

            $(".imgFrame").removeClass('cheat');
            $(`[id="${id}"]`).addClass('cheat');
        });
    });
});

function updateScore() {
    $('.players').children().removeClass('active');

    if (isFirstPlayer) {
        $('#p1').addClass('active');
    } else {
        $('#p2').addClass('active');
    }

    $('#p1 p').text(firstPlayer.length);
    $('#p2 p').text(secondPlayer.length);
    isProcessing = false;

    if ($(".imgFrame:not(.usedCard)").length == 0) {
        // המשחק נגמר

        if (firstPlayer.length > secondPlayer.length) {
            snackbar('שחקן 1 ניצח!!!!');
        } else if (firstPlayer.length < secondPlayer.length) {
            snackbar('שחקן 2 ניצח!!!!');
        } else {
            snackbar('תיקו');
        }
    }
}

function snackbar(message) {
    $('#snackbar').text(message).addClass('show');

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
        $('#snackbar').removeClass('show');
    }, 1000 * 3);
}