let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.photo');
const totalPhotos = photos.length;
var buttons = document.querySelectorAll('.button');

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

    // 모든 버튼의 active 클래스를 제거하고 현재 버튼에 active 클래스 추가
    buttons.forEach(button => button.classList.remove('active'));
    buttons[currentPhotoIndex].classList.add('active');
}

let intervalId = setInterval(showNextPhoto, 3000);

function resetTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(showNextPhoto, 3000);
}

// Initialize the first photo and active button
showCurrentPhoto();
buttons[currentPhotoIndex].classList.add('active');
