
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    let currentIndex = 0;

    function updateCarousel() {
        const width = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    // autoplay individual para cada carrossel
    let autoPlay = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 5000);

    // pausa autoplay quando o mouse entra, retoma quando sai
    carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
    carousel.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, 5000);
    });
});

const burger = document.querySelector('.burger');
const panel = document.getElementById('mobile');

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
let currentIndex = 0;

burger?.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
});
