document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer 설정 (기본 옵션 사용)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('no1')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, 600);
                } else if (entry.target.classList.contains('no2')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, 1200);
                }else if (entry.target.classList.contains('no3')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, 1800);
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
    const no3 = document.querySelector('.between > .no3');

    if (no1) observer.observe(no1);
    if (no2) observer.observe(no2);
    if (no3) observer.observe(no3);
});
