document.addEventListener('DOMContentLoaded', () => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let animation = entry.target.querySelector('#dash');
                if (animation) {
                    animation.beginElement();
                }
            }
        });
    });

    let item = document.querySelector(".showC");
    observer.observe(item);
});