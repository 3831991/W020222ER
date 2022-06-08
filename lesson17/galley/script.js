var currentIndex = 0;
var myTimeout;

function createGallery() {
    for (var x = 1; x <= 10; x++) {
        document.getElementById("gallery").innerHTML += `<img onclick="showNext()" src="images/img (${x}).jpg" alt="תיאור לתמונה">`;
    }

    // Show first image.
    showNext();
}

function showNext() {
    clearTimeout(myTimeout);

    // All images.
    var images = document.getElementById("gallery").children;

    // Hide all images.
    for (var x = 0; x < images.length; x++) {
        images[x].style.display = 'none';
    }

    // Show current image.
    images[currentIndex].style.display = 'block';
    currentIndex++;

    // If index equal images length.
    if (currentIndex == images.length) {
        currentIndex = 0;
    }

    myTimeout = setTimeout(showNext, 2 * 1000);
}