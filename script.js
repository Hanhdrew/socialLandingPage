const videoCards = document.querySelectorAll('.video-card');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(20px)';
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

videoCards.forEach((card) => {
  observer.observe(card);
});

const videoCardContents = document.querySelectorAll('.video-card-content');

videoCardContents.forEach(card => {
  let touchTimeout;

  card.addEventListener('touchstart', () => {
    touchTimeout = setTimeout(() => {
      card.classList.add('touch-active');
    }, 100);
  });

  card.addEventListener('touchend', () => {
    clearTimeout(touchTimeout);
    card.classList.remove('touch-active');
  });

  card.addEventListener('touchmove', () => {
    clearTimeout(touchTimeout);
    card.classList.remove('touch-active');
  });
});