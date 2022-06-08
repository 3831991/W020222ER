// משתנה המכיל את האינדקס של התמונה המוצגת כעת בגלרייה (ובתפריט הצד)
var currentIndex = 0;

// משתנה שמכיל בתוכו את התזמון (לצורך ביטולו)
var myTimeout;

// האם הגלרייה על מצב הפעלה
var isPlay = true;

function createGallery() {
    for (var x = 1; x <= 10; x++) {
        // מוסיף את התמונות לגלרייה
        document.getElementById("gallery").innerHTML += `<img src="images/img (${x}).jpg" alt="תיאור לתמונה">`;

        // מוסיף את התמונות לתפריט הצד 
        document.getElementById("aside").innerHTML += `<img src="images/img (${x}).jpg" alt="תיאור לתמונה" onclick="showMy(${x})">`;
    }

    // Show first image.
    showImage('next');
}

function showImage(dir) {
    clearTimeout(myTimeout);

    // הופך את האייקון למצב השהייה
    document.getElementById('pause').className = 'fa fa-pause-circle';
    isPlay = true;

    // All images.
    var images = document.getElementById("gallery").children;
    var asideImg = document.getElementById("aside").children;

    // Hide all images.
    for (var x = 0; x < images.length; x++) {
        images[x].style.display = 'none';
        asideImg[x].className = '';
    }

    if (dir == 'next') {
        currentIndex++;

        // If index equal images length.
        if (currentIndex == images.length) {
            currentIndex = 0;
        }
    } else if (dir == 'prev') {
        currentIndex--;

        // If index equal 0.
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
    }

    // Show current image.
    images[currentIndex].style.display = 'block';
    asideImg[currentIndex].className = 'current';

    //                     Function   Timer     params
    myTimeout = setTimeout(showImage, 2 * 1000, dir);

    // אופציה נוספת להפעלת פונקציה מתוזמנת עם ערכים
    // myTimeout = setTimeout(function() {
    //     showImage(dir);
    // }, 2 * 1000);
}

// מציג בגלרייה את התמונה שנבחרה בתפריט הצד
function showMy(num) {
    currentIndex = num - 2;
    showImage('next');
}

// מפעיל / עוצר את הגלריה
function pause() {
    if (isPlay) {
        isPlay = false;

        // הופך את האייקון למצב הפעלה
        document.getElementById('pause').className = 'fa fa-play-circle';
        clearTimeout(myTimeout);
    } else {
        showImage('next');
    }
}