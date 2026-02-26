// ================= MOBILE MENU TOGGLE =================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a link (mobile UX improvement)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ================= TESTIMONIAL AUTO SLIDER =================
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove("active");
    });
    testimonials[index].classList.add("active");
}

function nextTestimonial() {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
}

// Auto change every 4 seconds
setInterval(nextTestimonial, 4000);


// ================= CONTACT FORM HANDLER =================
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const phoneInput = document.getElementById("phoneInput");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const phoneValue = phoneInput.value.trim();

        if (!/^\d{10}$/.test(phoneValue)) {
            formMessage.textContent = "Phone number must be exactly 10 digits.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Thank you! Your request has been received. We will contact you shortly.";
        formMessage.style.color = "green";

        form.reset();
    });

});


// ================= SIMPLE SCROLL ANIMATION =================
const revealElements = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
});

// Initial hidden state
revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.6s ease";
});