const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Smooth scroll to top when clicking the button
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const theme = e.target.getAttribute('data-theme');
        const root = document.querySelector(':root');

        switch(theme) {
            case 'blue':
                root.style.setProperty('--primary-color', '#007bff');
                break;
            case 'green':
                root.style.setProperty('--primary-color', '#28a745');
                break;
            case 'purple':
                root.style.setProperty('--primary-color', '#6f42c1');
                break;
            default:
                root.style.setProperty('--primary-color', '#E31E24');
        }
    });
});
