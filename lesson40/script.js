function getDataByCategory(category, elem) {
    $('.categories a').removeClass('active');
    $(elem).addClass('active');

    /**
     * פנייה לשרת
     * שלושה פרמטרים: קישור, פרמטרים, פונקציה בסיום
     */
    $.get("data.php", { category }, function(res) {
        // הפיכת הנתונים שקיבלנו לאובייקט
        const resData = JSON.parse(res);

        // אם קיבלנו שגיאה - מציגים אותה ללקוח
        if (resData.status == 'error') {
            alert(resData.message);
        } else {
            // קבלת התבנית של הכתבות
            const htmlStr = $("#artTemp").html();
            // ניקוי הכתבות הקודמות
            $('#articles').text('');

            // מעבר על כל הכתבות
            for (const item of resData.data) {
                // יצירת עותק מהתבנית לצורך יצירת כתבה
                const temp = $(htmlStr);

                // הוספת כותרת
                temp.find('#title').html(item.title);
                // הסרת אלמנטים מהתיאור שקיבלנו
                const desc = $(item.description).text();
                // הוספת התיאור
                temp.find('#description').html(desc);
                // הטמעת הקישור של התמונה
                temp.find('.img').css('background-image', `url('${item.enclosure['@attributes'].url}')`);
                temp.find('.img').attr('href', item.link);

                // הוספת הכתבה
                $('#articles').append(temp);
            }
        }
    });
}