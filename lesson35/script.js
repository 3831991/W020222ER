function getData(limit) {
    $.get("http://localhost:8080/full-stack/lesson35/data.php", { limit })
        .done(function(data) {
            const clients = JSON.parse(data);

            let html = "<ul>";

            clients.forEach(item => {
                html += `<li>${item.firstName} ${item.lastName}</li>`;
            });

            html += "</ul>";

            document.body.innerHTML = html;
        });
}