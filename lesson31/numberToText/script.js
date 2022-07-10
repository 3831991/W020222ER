function showText() {
    const str = document.querySelector("#num1").value;
    let index = 0;
    const values = [];

    for (var i = str.length - 1; i >= 0; i--) {
        const arr = transform[index];
        const num = str[i];
        values.unshift(arr[num - 1]);
        index++;
    }

    // הוספנו את ו' החיבור למילה האחרונה
    values[values.length - 1] = "ו" + values[values.length - 1];

    // חיברנו את המערכים עם רווח
    document.querySelector("#output").innerHTML = values.join(' ');
}