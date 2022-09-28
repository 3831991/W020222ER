$(function() {

    $.get("products.php", function(res) {
        const data = JSON.parse(res);

        data.forEach((item, i) => {
            $('#products').append(`
                <tr id="${item.id}">
                    <td>${i + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.date}</td>
                    <td><button onclick="removeItem(this)" class="w3-btn w3-red">x</button></td>
                </tr>
            `);
        });
    });

});

function removeItem(elem) {
    const id = $(elem).parents('tr').attr('id');

    $.post("products.php", { id, action: 'delete' }, function(res) {

    });
}