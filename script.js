let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.photo');
const totalPhotos = photos.length;

function showPhoto(index) {
    photos[currentPhotoIndex].style.opacity = 0;
    photos[currentPhotoIndex].querySelector('.text-overlay').style.opacity = 0;
    photos[currentPhotoIndex].querySelector('.text-overlay').style.transform = 'translateY(100%)';
    currentPhotoIndex = index;
    photos[currentPhotoIndex].style.opacity = 1;
    photos[currentPhotoIndex].querySelector('.text-overlay').style.opacity = 1;
    photos[currentPhotoIndex].querySelector('.text-overlay').style.transform = 'translateY(0)';
    resetTimer();
}

function showNextPhoto() {
    photos[currentPhotoIndex].style.opacity = 0;
    photos[currentPhotoIndex].querySelector('.text-overlay').style.opacity = 0;
    photos[currentPhotoIndex].querySelector('.text-overlay').style.transform = 'translateY(100%)';
    currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
    photos[currentPhotoIndex].style.opacity = 1;
    photos[currentPhotoIndex].querySelector('.text-overlay').style.opacity = 1;
    photos[currentPhotoIndex].querySelector('.text-overlay').style.transform = 'translateY(0)';
}

let intervalId = setInterval(showNextPhoto, 5000);

function resetTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(showNextPhoto, 5000);
}

// Initialize the first photo
photos[currentPhotoIndex].style.opacity = 1;
photos[currentPhotoIndex].querySelector('.text-overlay').style.opacity = 1;
photos[currentPhotoIndex].querySelector('.text-overlay').style.transform = 'translateY(0)';
