/**
 * Main JS — Siigo Aspel Redesign
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ───────────────────────────────────────────
       1. Header scroll effect
    ─────────────────────────────────────────── */
    const header = document.getElementById('header');
    const onScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ───────────────────────────────────────────
       2. Scroll reveal
    ─────────────────────────────────────────── */
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(el => revealObserver.observe(el));

    /* ───────────────────────────────────────────
       3. Counter animation
    ─────────────────────────────────────────── */
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach(el => counterObserver.observe(el));

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutQuart
            const eased = 1 - Math.pow(1 - progress, 4);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
        };
        requestAnimationFrame(step);
    }

    /* ───────────────────────────────────────────
       4. Solutions Tabs
    ─────────────────────────────────────────── */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => {
                p.classList.remove('active');
                p.style.animation = '';
            });

            btn.classList.add('active');
            const panel = document.getElementById('tab-' + target);
            if (panel) {
                panel.classList.add('active');
                panel.style.animation = 'tabFadeIn 0.35s ease forwards';
            }
        });
    });

    /* ───────────────────────────────────────────
       5. Smooth scroll for nav links
    ─────────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const offset = header.offsetHeight + 12;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    /* ───────────────────────────────────────────
       6. Add tab fade-in keyframes dynamically
    ─────────────────────────────────────────── */
    const style = document.createElement('style');
    style.textContent = `
        @keyframes tabFadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

});
