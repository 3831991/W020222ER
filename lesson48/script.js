$(function() {

    $.get("articles.php", function(res) {
        const arr = JSON.parse(res);
        const temp = $('#art template').html();

        arr.forEach((item, i) => {
            const elem = $(temp);

            $(elem).find('#num').text(i + 1);
            $(elem).find('#date').text(item.publishedTime);
            $(elem).find('#rep').text(item.name);
            $(elem).find('#title').text(item.title);
            $(elem).find('#desc').text(item.description);

            $('#art').append(elem);
        });
    });

});