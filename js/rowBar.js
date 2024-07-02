document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer 설정 (기본 옵션 사용)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('no1')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, 700);
                } else if (entry.target.classList.contains('no2')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, 1600);
                }
            }
            else{
                entry.target.classList.remove('animate');
            }
        });
    });

    // no1과 no2 요소를 관찰
    const no1 = document.querySelector('.between > .no1');
    const no2 = document.querySelector('.between > .no2');

    if (no1) observer.observe(no1);
    if (no2) observer.observe(no2);
});
