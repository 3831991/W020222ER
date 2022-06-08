var i = 0;
var interval;

function createTable() {
    interval = setInterval(function() {
        var car = cars[i++];

        document.getElementById("list").innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${car.number}</td>
                <td>${car.manufacturer}</td>
                <td>${car.name}</td>
                <td>${car.model}</td>
                <td>${car.km}</td>
                <td>${car.firstName} ${car.lastName}</td>
            </tr>`;

        if (i >= cars.length) {
            clearInterval(interval);
        }
    }, 10);
}

// function createTable() {
//     var str = "";

//     for (var i = 0; i < cars.length; i++) {
//         var car = cars[i];

//         str += `<tr>
//                     <td>${i + 1}</td>
//                     <td>${car.number}</td>
//                     <td>${car.manufacturer}</td>
//                     <td>${car.name}</td>
//                     <td>${car.model}</td>
//                     <td>${car.km}</td>
//                     <td>${car.firstName} ${car.lastName}</td>
//                 </tr>`;
//     }

//     document.getElementById("list").innerHTML += str;
// }

// {
//     "clientId": 4655,
//     "color": "blue",
//     "disabled": false,
//     "firstName": "אלירן",
//     "id": 5571,
//     "km": "",
//     "lastName": "אביעם",
//     "manufacturer": "פיאט",
//     "model": 2002,
//     "name": "מולטיפלה",
//     "number": "147-65-36",
//     "test": 11,
//     "type": "private",
//     "workFormCount": 1
// }