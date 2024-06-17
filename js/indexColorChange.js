document.querySelectorAll('.card').forEach(card => {
    const arrow = card.querySelector('.arrow');
    const img = card.querySelector('.icon');
    const originalSrc = img.src;
    const originalSrc_a = arrow.src;
    const hoverSrc = card.getAttribute('data-hover-src1');
    const hoverSrc_a = card.getAttribute('data-hover-src2');

    card.addEventListener('mouseover', () => {
        img.src = hoverSrc;
        arrow.src = hoverSrc_a;
    });

    card.addEventListener('mouseout', () => {
        img.src = originalSrc;
        arrow.src = originalSrc_a;
    });
});