let filesToUpload = [];

function imageChange(ev) {
    const file = ev.target.files[0];

    if (file.type != 'image/jpeg' && file.type != 'image/jpg') {
        alert("קובץ לא מורשה");
        return;
    }

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

function dragOver(ev) {
    ev.preventDefault();
}

function dropFiles(ev) {
    ev.preventDefault();

    const files = ev.dataTransfer.files;
    filesToUpload = files;
    const ul = document.querySelector("ul");
    ul.innerHTML = '';

    for (const file of files) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const src = e.target.result;
            ul.innerHTML += `<li><img src="${src}" width="100"> ${file.name}</li>`;
        }

        reader.readAsDataURL(file);
    }
}

function uploadFiles() {
    if (!filesToUpload.length) {
        return;
    }

    const formData = new FormData();

    let i = 0;

    for (const file of filesToUpload) {
        formData.append(`images${i++}`, file);
    }

    fetch("http://localhost:770/gallery/upload/multi", {
        method: 'POST',
        body: formData,
    });
}