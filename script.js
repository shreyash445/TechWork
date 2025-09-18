// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Slideshow functionality
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.data-analytics-card');
    if (!card) return;

    const slides = card.querySelectorAll('.slide');
    const prevBtn = card.querySelector('.prev-slide');
    const nextBtn = card.querySelector('.next-slide');
    const dotsContainer = card.querySelector('.dot-navigation');
    const dots = [];

    let currentSlide = 0;

    const goToSlide = (n) => {
        slides[currentSlide].classList.remove('active');
        if (dotsContainer) dots[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if (dotsContainer) dots[currentSlide].classList.add('active');
    };

    const showNextSlide = () => goToSlide(currentSlide + 1);
    const showPrevSlide = () => goToSlide(currentSlide - 1);

    if (slides.length > 1) {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            showPrevSlide();
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            showNextSlide();
        });
    }
});
