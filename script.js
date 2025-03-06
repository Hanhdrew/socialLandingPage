document.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('video-card-content')) {
        event.target.classList.add('active');
    }
});

document.addEventListener('touchend', function(event) {
    if (event.target.classList.contains('video-card-content')) {
        event.target.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.video-card').forEach(card => {
    observer.observe(card);
});