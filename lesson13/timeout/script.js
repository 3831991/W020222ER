var i = 0;
var myInterval;
var arr = [];

// הפעלת המונה
function start() {
    myInterval = setInterval(function() {
        document.getElementById("output").innerHTML = ++i;
    }, 100);
}

// עצירת המונה
function stop() {
    clearInterval(myInterval);
}

// איפוס המונה
function reset() {
    i = 0;
    document.getElementById("output").innerHTML = i;
}

// שמירת הקפה
function save() {
    arr.push(i);
    document.getElementById("history").innerHTML = arr.join('<br>');
}