$(function() {

    // מקבלים את כל המוצרים מהשרת
    $.get("products.php", function(res) {
        // ממירים את הנתונים למערך
        const data = JSON.parse(res);

        // יוצרים מכל אובייקט שורה בטבלה
        data.forEach(item => {
            createHTML(item);
        });
    });

});

// פונקציה ליצירת שורה חדשה בטבלה
function createHTML(item) {
    $('#products').append(`
        <tr id="${item.id}">
            <td></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.date}</td>
            <td><button onclick="removeItem(this)" class="w3-btn w3-red remove">x</button></td>
        </tr>
    `);

    // מפעילים את פונקצית מספור השורות
    numbering();
}

// פונקציה הממספרת את הטבלה
function numbering() {
    $('#products tr').each(function(i) {
        $(this).children().first().text(i + 1);
    });
}

function removeItem(elem) {
    // שואלים את הלקוח האם למחוק
    if (!confirm("האם למחוק את המוצר?")) {
        return;
    }

    // מזהה המוצר שאנחנו רוצים למחוק
    const id = $(elem).parents('tr').attr('id');

    $.post("products.php", { id, action: 'delete' }, function() {
        // מוחקים את השורה מהטבלה
        $(elem).parents('tr').remove();
        // מפעילים את פונקצית מספור השורות
        numbering();
    });
}

function addProduct() {
    // קליטת הנתונים מהמודל
    const name = $('#productName').val();
    const price = $('#price').val();

    // אם אין נתונים זה לא נותן להתקדם
    if (!name || !price) {
        alert("חסרים פרמטרים");
        return;
    }

    // שליחת הנתונים לשרת
    $.post("products.php", { name, price, action: 'add' }, function(res) {
        const item = JSON.parse(res);

        // מוסיף את המוצר לטבלה שלנו
        createHTML(item);
        // מסתיר את החלונית של ההוספה
        $('#modal').hide();
        // מוחקים את הערכים מהאינפוטים
        $('#productName').val('');
        $('#price').val('');
    });
}