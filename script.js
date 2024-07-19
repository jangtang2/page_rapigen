let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.photo');
const totalPhotos = photos.length;
const buttons = document.querySelectorAll('.button');

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
    currentPhoto.style.transition = 'transform 0.5s ease-in-out';
    //currentPhoto.style.transform = 'translateX(-100%)'; // 왼쪽으로 슬라이드 아웃
    currentPhoto.style.zIndex = 2; // 현재 슬라이드의 z-index를 낮게 설정
}

function showCurrentPhoto() {
    const currentPhoto = photos[currentPhotoIndex];
    currentPhoto.style.transition = 'none';
    currentPhoto.style.transform = 'translateX(100%)'; // 오른쪽에서 시작
    currentPhoto.style.zIndex = 3; // 새 슬라이드의 z-index를 높게 설정

    setTimeout(() => {
        currentPhoto.style.transition = 'transform 0.5s ease-in-out';
        currentPhoto.style.transform = 'translateX(0)'; // 현재 위치로 슬라이드 인
    }, 50); // 약간의 딜레이를 주어 위치 초기화 후 애니메이션 시작

    const mainText = currentPhoto.querySelector('.main_text');
    const subText = currentPhoto.querySelector('.sub_text');
    mainText.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    mainText.style.opacity = 1;
    mainText.style.transform = 'translateY(0)';
    setTimeout(() => {
        subText.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        subText.style.opacity = 1;
        subText.style.transform = 'translateY(0)';
    }, 500); // Additional delay for the sub_text

    // 모든 버튼의 active 클래스를 제거하고 현재 버튼에 active 클래스 추가
    buttons.forEach(button => button.classList.remove('active'));
    buttons[currentPhotoIndex].classList.add('active');
}

// 이전 슬라이드의 z-index를 2로 설정
function adjustPreviousPhoto() {
    const previousPhotoIndex = (currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
    const previousPhoto = photos[previousPhotoIndex];
    previousPhoto.style.zIndex = 1; // 이전 슬라이드의 z-index를 중간으로 설정
}

let intervalId = setInterval(() => {
    adjustPreviousPhoto();
    showNextPhoto();
}, 3000);

function resetTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        adjustPreviousPhoto();
        showNextPhoto();
    }, 3000);
}

// Initialize the first photo and active button
showCurrentPhoto();
buttons[currentPhotoIndex].classList.add('active');
