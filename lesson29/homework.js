const banknotes = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.1];
const inventory = {};

function showBanknotes() {
    let num = +document.querySelector("#num1").value;
    document.querySelector("#output1").innerHTML = '';

    const initialAmount = num;
    let result = 0;

    for (let i = 0; i < banknotes.length; i++) {
        const n = banknotes[i];
        num = Math.ceil(num * 100) / 100;

        if (num >= n && inventory[n]) {
            document.querySelector("#output1").innerHTML += `<img src="./banknotes/img (${n}).png">`;
            document.getElementById(`banknote_${n}`).value = --inventory[n];

            result += n;
            num -= n;
            i--;
        }
    }

    if (result < initialAmount) {
        document.querySelector("#output1").innerHTML += `<p style="color: red;">סכום שחסר: ${Math.ceil((initialAmount - result) * 100) / 100}</p>`;
    }
}

function createInventory() {
    let html = "<tr>";

    banknotes.forEach(n => {
        inventory[n] = Math.floor(Math.random() * 20) + 1;

        html += `<td>
                    <img src="./banknotes/img (${n}).png">
                    <br> <input id="banknote_${n}" type="number" value="${inventory[n]}" onchange="inventory[${n}] = +this.value">
                </td>`;
    });

    html += "</tr>";
    document.querySelector("#inventory").innerHTML = html;
}

createInventory();