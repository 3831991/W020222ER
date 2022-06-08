function showDay() {
    var day = new Date().getDay();
    var elem = document.getElementById("output1");

    switch (day) {
        case 0:
            elem.innerHTML = "ראשון";
            break;
        case 1:
            elem.innerHTML = "שני";
            break;
        case 2:
            elem.innerHTML = "שלישי";
            break;
        case 3:
            elem.innerHTML = "רביעי";
            break;
        case 4:
            elem.innerHTML = "חמישי";
            break;
        case 5:
            elem.innerHTML = "שישי";
            break;
        case 6:
            elem.innerHTML = "שבת";
            break;
    }
}

function convert(x) {
    switch (x) {
        case "א":
            return "address-book";
        case "ב":
            return "adjust";
        case "ג":
            return "archive";
        case "ד":
            return "asl-interpreting";
        case "ה":
            return "asterisk";
        case "ו":
            return "automobile";
        case "ז":
            return "balance-scale";
        case "ח":
            return "ban";
        case "ט":
            return "battery-empty";
        case "י":
            return "bell";
        case "כ":
            return "birthday-cake";
        case "ך":
            return "birthday-cake";
        case "ל":
            return "bolt";
        case "מ":
            return "book";
        case "ם":
            return "book";
        case "נ":
            return "bus";
        case "ן":
            return "bus";
        case "ס":
            return "calculator";
        case "ע":
            return "camera";
        case "פ":
            return "certificate";
        case "ף":
            return "certificate";
        case "צ":
            return "clone";
        case "ץ":
            return "clone";
        case "ק":
            return "comment";
        case "ר":
            return "cube";
        case "ש":
            return "database";
        case "ת":
            return "eye";
    }
}

function convertToIcons() {
    var str = document.getElementById("text").value;
    var res = "";

    for (var i = 0; i < str.length; i++) {
        var icon = convert(str[i]);

        if (icon) {
            res += `<i class="fa fa-${icon}"></i>`;
        } else if (str[i] == '\n') {
            res += `<br>`;
        } else {
            res += `<span>${str[i]}</span>`;;
        }
    }

    document.getElementById("output2").innerHTML = res;
}