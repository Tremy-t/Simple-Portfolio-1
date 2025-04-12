// Fade-in animations for hero section (already handled via CSS)

// Scroll reveal animations
const scrollReveals = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    scrollReveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on page load

// Form submission (placeholder)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for your message! This is a demo form.');
    form.reset();
});

// Carousel functionality
function setupCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

document.addEventListener('DOMContentLoaded', setupCarousel);

// Hamburger Menu
// Hamburger menu functionality
// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});