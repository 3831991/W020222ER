function createArticles(arr) {

}

function getData() {
    // בתחילת הפנייה לשרת, זה מציג את הסימון של הטעינה
    document.querySelector(".loader").style.display = "block";
    // מנקה את הנתונים הקיימים
    document.querySelector("#output").innerHTML = "";

    // יצירת אובייקט של ה-Ajax
    const http = new XMLHttpRequest();

    http.onload = () => {
        const arr = JSON.parse(http.responseText);
        createArticles(arr);

        document.querySelector(".loader").style.display = "none";
    }

    http.open("GET", "data.php");
    http.send();
}