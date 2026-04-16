// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile hamburger menu
const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

nav.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Servicios filter
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.servicio-card');

function filterCards(filter) {
    cards.forEach(card => {
        if (card.dataset.category === filter) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Show only the active category on load
const activeFilter = document.querySelector('.filter-btn.active');
if (activeFilter) {
    filterCards(activeFilter.dataset.filter);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterCards(btn.dataset.filter);
    });
});

// Proceso accordion (mobile)
const steps = document.querySelectorAll('.proceso__step');

steps.forEach(step => {
    step.addEventListener('click', () => {
        if (window.innerWidth > 768) return;
        const isOpen = step.classList.contains('open');
        steps.forEach(s => s.classList.remove('open'));
        if (!isOpen) step.classList.add('open');
    });
});

// Contact form submission via Web3Forms
const form = document.querySelector('.contacto__form');
const result = document.getElementById('form-result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.contacto__submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Enviando...';
    submitBtn.disabled = true;

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: new FormData(form)
        });
        const data = await response.json();

        if (data.success) {
            result.className = 'contacto__result success';
            result.textContent = 'Mensaje enviado con éxito. Daniela te contactará pronto.';
            form.reset();
        } else {
            result.className = 'contacto__result error';
            result.textContent = 'Hubo un error al enviar. Intenta de nuevo o contáctanos por WhatsApp.';
        }
    } catch {
        result.className = 'contacto__result error';
        result.textContent = 'Error de conexión. Intenta de nuevo o contáctanos por WhatsApp.';
    }

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
});
