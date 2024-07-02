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

document.addEventListener("DOMContentLoaded", function() {
    // 모든 클래스가 "card"인 요소를 가져옵니다.
    const cards = document.querySelectorAll('.card');
  
    // 각 카드에 클릭 이벤트 리스너를 추가합니다.
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        // 카드의 id에 따라 다른 페이지로 이동합니다.
        if (card.id === 'card1') {
          window.location.href = 'human_product.html'; 
        } else if (card.id === 'card2') {
          window.location.href = 'animal_product.html'; 
        }
        else if (card.id === 'card3') {
            window.location.href = '#'; 
        }
        else if (card.id === 'card4') {
            window.location.href = '#';
        }
        // 추가적인 카드가 있을 경우에도 else if 문을 추가하여 다른 페이지로 이동시킬 수 있습니다.
      });
    });
  });
  