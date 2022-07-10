let shoppingCart = [];

function showProducts() {
    let html = "";

    for (const item of fruits) {
        html += `<div class="card">
                    <img src="images/${item.img}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><b>מחיר: </b> ${item.price} ש"ח</p>
                        <button class="btn btn-primary" onclick="addProduct(${item.id})">הוסף לסל</button>
                    </div>
                </div>`;
    }

    document.querySelector("#products").innerHTML = html;

    // אם יש ערכים ב-localStorage
    if (localStorage.cart) {
        shoppingCart = JSON.parse(localStorage.cart);
        updateCartCount();
    }
}

function addProduct(id) {
    shoppingCart.push(id);

    // שמרנו את המערך ב-localStorage
    localStorage.cart = JSON.stringify(shoppingCart);
    updateCartCount();
}

function updateCartCount() {
    document.querySelector("#cart span").innerHTML = shoppingCart.length;
}

function showCart() {
    let html = "";

    // לולאה שרצה על סל הקניות (שמכיל רק מזהים של מוצרים - ID)
    shoppingCart.forEach((cartId, i) => {
        // מחפש את המוצר לפי המזהה (ID)
        const item = fruits.find(x => x.id == cartId);

        html += `<tr>
                    <td>${i + 1}</td>
                    <td>${item.name}</td>
                    <td>1</td>
                    <td>${item.price}</td>
                </tr>`
    });

    document.querySelector(".modal-body tbody").innerHTML = html;
}

showProducts();

function setColor() {
    const color = document.querySelector("#color").value;
    document.body.style.backgroundColor = color;
    localStorage.color = color;
}

if (localStorage.color) {
    document.body.style.backgroundColor = localStorage.color;
}