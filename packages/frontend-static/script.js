document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('index.html')) {
        setTimeout(function () {
            const overlay = document.querySelector('#overlay');
            overlay.remove(overlay);

            document.querySelector('main').style.opacity = 1;
        }, 2000);
    }
});
