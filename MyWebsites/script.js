// ═══════════════════════════════════════════════
// GALLERY LIGHTBOX — Full Featured
// ═══════════════════════════════════════════════
let currentImageIndex = 0;
const images = document.querySelectorAll('.thumbnail');

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById('lightboxImage').src = images[currentImageIndex].src;
    document.getElementById('lightbox').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    else if (currentImageIndex >= images.length) currentImageIndex = 0;
    document.getElementById('lightboxImage').src = images[currentImageIndex].src;
}

// Keyboard Controls
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.style.display === 'block') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
    }
});

// ═══════════════════════════════════════════════
// CONTACT FORM VALIDATION
// ═══════════════════════════════════════════════
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    if (!name.value.trim()) {
        showError('nameError', '⚠️ Please enter your name');
        isValid = false;
    }
    
    if (!email.value.trim()) {
        showError('emailError', '⚠️ Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError('emailError', '⚠️ Please enter a valid email address');
        isValid = false;
    }
    
    if (!subject.value.trim()) {
        showError('subjectError', '⚠️ Please enter a subject');
        isValid = false;
    }
    
    if (!message.value.trim()) {
        showError('messageError', '⚠️ Please enter your message');
        isValid = false;
    } else if (message.value.length < 10) {
        showError('messageError', '⚠️ Message must be at least 10 characters');
        isValid = false;
    }
    
    if (isValid) {
        alert('✅ Message sent successfully!\nThank you for reaching out! 🎉');
        document.getElementById('contactForm').reset();
    }
}

function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ═══════════════════════════════════════════════
// TABS — Skills Page
// ═══════════════════════════════════════════════
function openTab(evt, tabName) {
    document.querySelectorAll('.tabcontent').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tablinks').forEach(t => t.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// ═══════════════════════════════════════════════
// GOALS — Click to Toggle Details
// ═══════════════════════════════════════════════
function toggleGoal(card) {
    card.querySelector('.goal-details').classList.toggle('active');
}

// ═══════════════════════════════════════════════
// LOGOUT — Confirmation Dialog
// ═══════════════════════════════════════════════
function confirmLogout() {
    if (confirm('Are you sure you want to log out? 👋')) {
        window.location.href = 'login.html';
    }
}

// ═══════════════════════════════════════════════
// AUTO SLIDER — Hero Section
// ═══════════════════════════════════════════════
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelector('.slides');
    if (slides) {
        slideIndex = (slideIndex + 1) % 3;
        slides.style.transform = `translateX(-${slideIndex * 33.333}%)`;
    }
}
setInterval(showSlides, 5000);
