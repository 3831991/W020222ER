let articleId;

$(function() {

    $.get("api/articles/get.php", function(res) {
        const arr = JSON.parse(res);
        const temp = $('#art template').html();

        arr.forEach((item, i) => {
            const elem = $(temp);

            $(elem).find('#num').text(i + 1);
            $(elem).find('#date').text(item.time);
            $(elem).find('#rep').text(item.reporterName);
            $(elem).find('#title').text(item.title);
            $(elem).find('#desc').text(item.description);
            $(elem).find('#comments').html(`<button onclick="showComments(${item.id})">תגובות (${item.comments})</button>`);

            $('#art').append(elem);
        });
    });

});

function showComments(id) {
    articleId = id;

    $.get("api/comments/get.php", { articleId }, function(res) {
        const arr = JSON.parse(res);
        const temp = $('#com template').html();
        $('#com #myTbody').html('');

        arr.forEach((item, i) => {
            const elem = $(temp);

            $(elem).find('#num').text(i + 1);
            $(elem).find('#date').text(item.time);
            $(elem).find('#name').text(item.userName);
            $(elem).find('#content').text(item.comment);

            $('#com #myTbody').append(elem);
        });
    });

    $('#modal').show();
}

function addComment() {
    const obj = {
        comment: $('#comment').val(),
        userName: $('#inputName').val(),
        articleId,
    };

    $.post("api/comments/add.php", obj, function(res) {
        $('#comment').val('');
        $('#inputName').val('');

        // const item = JSON.parse(res);

        showComments(articleId);
    });
}