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