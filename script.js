window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logo = document.querySelector('.profile-image');
    var logoPosition = logo.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;
    var scale = 1 - (scrollPosition / (windowHeight / 2)); 
    if (logoPosition < windowHeight / 2) {
        header.style.opacity = '1';
    } else {
        header.style.opacity = '0';
    }
    var icons = document.querySelectorAll('.social-links img');
    icons.forEach(function(icon) {
        if (scrollPosition > logoPosition) {
            icon.style.opacity = '1';
            icon.style.transform = 'translateX(0)';
        } else {
            icon.style.opacity = '0'; 
            icon.style.transform = 'translateX(100%)';
        }
    });
    if (scale < 0.5) {
        logo.classList.add('small');
        logo.style.transform = 'none';
    } else {
        logo.classList.remove('small');
        logo.style.transform = 'scale(' + scale + ')';
    }
});