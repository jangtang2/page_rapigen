let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.photo');
const totalPhotos = photos.length;

function showPhoto(index) {
    hideCurrentPhoto();
    currentPhotoIndex = index;
    showCurrentPhoto();
    resetTimer();
}

function showNextPhoto() {
    hideCurrentPhoto();
    currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
    showCurrentPhoto();
}

function hideCurrentPhoto() {
    const currentPhoto = photos[currentPhotoIndex];
    currentPhoto.style.opacity = 0;
    const img = currentPhoto.querySelector('img');
    img.style.transform = 'scale(1)';
    const mainText = currentPhoto.querySelector('.main_text');
    const subText = currentPhoto.querySelector('.sub_text');
    mainText.style.opacity = 0;
    mainText.style.transform = 'translateY(60%)';
    subText.style.opacity = 0;
    subText.style.transform = 'translateY(60%)';
}

function showCurrentPhoto() {
    const currentPhoto = photos[currentPhotoIndex];
    currentPhoto.style.opacity = 1;
    const img = currentPhoto.querySelector('img');
    setTimeout(() => {
        img.style.transform = 'scale(1.1)';
    }, 200); // Delay to start the zoom effect
    const mainText = currentPhoto.querySelector('.main_text');
    const subText = currentPhoto.querySelector('.sub_text');
    setTimeout(() => {
        mainText.style.opacity = 1;
        mainText.style.transform = 'translateY(0)';
    }, 200); // Delay for the main_text
    setTimeout(() => {
        subText.style.opacity = 1;
        subText.style.transform = 'translateY(0)';
    }, 1000); // Additional delay for the sub_text
}

let intervalId = setInterval(showNextPhoto, 3000);

function resetTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(showNextPhoto, 3000);
}

// Initialize the first photo
showCurrentPhoto();
