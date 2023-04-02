const banknotes = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.1];

function transaction() {
    let num = +document.querySelector("#num1").value;
    document.querySelector("#output1").innerHTML = '';
    document.querySelector("#num1").value = '';

    const initialAmount = num;
    let result = 0;

    const usedCash = {};

    for (let i = 0; i < banknotes.length; i++) {
        const n = banknotes[i];
        num = Math.ceil(num * 100) / 100;

        if (num >= n && inventory[n]) {
            document.querySelector("#output1").innerHTML += `<img src="./banknotes/img (${n}).png">`;
            document.getElementById(`banknote_${n}`).innerHTML = --inventory[n];

            result += n;
            num -= n;
            i--;

            if (!usedCash[n]) {
                usedCash[n] = 0;
            }

            usedCash[n]++;
        }
    }

    if (result < initialAmount) {
        document.querySelector("#output1").innerHTML += `<p style="color: red;">סכום שחסר: ${Math.ceil((initialAmount - result) * 100) / 100}</p>`;
    }

    const item = {
        usedCash,
        sum: result,
        change: initialAmount - result,
    };

    fetch("transaction.php", {
        method: "POST",
        body: JSON.stringify(item),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
}

function inventoryInsert() {
    const cash = {};

    document.querySelectorAll("#inventoryInsert input").forEach(elem => {
        cash[elem.id] = +elem.value;
    });

    fetch("inventoryInsert.php", {
        method: "POST",
        body: JSON.stringify(cash),
    })
    .then(() => {
        location.reload();
    });
}