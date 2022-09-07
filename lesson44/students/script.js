$(function() {
    $.get("students.txt", function(res) {
        const classes = JSON.parse(res);

        classes.forEach(c => {
            $('select').append(`<option value="${c.id}">כיתה ${c.name}</option>`);
        });

        $('select').change(function() {
            $('#students').html("");

            const classId = $(this).val();
            const temp = $("table template").html();
            // פונקציה של JavaScript
            const c = classes.find(x => x.id == classId);

            c.students.forEach((x, i) => {
                const elem = $(temp);

                elem.find('#numbering').html(i + 1);
                elem.find('#fullName').html(x.fullName);
                elem.find('#personId').html(x.personId);
                elem.find('#phone').html(x.phone);
                elem.find('#email').html(x.email);
                elem.find('#grades').html(x.grades.join());

                $('#students').append(elem);
            });
        });
    });
});