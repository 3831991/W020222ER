function createTable() {
    let str = "";

    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];

        str += `<tr>
                    <td>${i + 1}</td>
                    <td>${car.number}</td>
                    <td>${car.manufacturer}</td>
                    <td>${car.name}</td>
                    <td>${car.model}</td>
                    <td>${car.km}</td>
                    <td>${car.firstName} ${car.lastName}</td>
                </tr>`;
    }

    document.getElementById("list").innerHTML = str;
}

createTable();