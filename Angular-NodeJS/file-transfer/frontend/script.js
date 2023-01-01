function imageChange(ev) {
    const file = ev.target.files[0];
    
    // מחלקה מובנית שיודעת לקרוא קבצים שהועלו מקומית
    const reader = new FileReader();

    // בסיום קריאת הקובץ הוא מפעיל את הפונקציה הזאת
    reader.onload = (e) => {
        const img = document.querySelector('img');
        img.src = e.target.result;
        img.style.display = 'block';
    }

    // מפעיל את הפונקציה של קריאת הקובץ
    reader.readAsDataURL(file);
}