

// ===== Scroll Progress Bar =====
const scrollProgress = document.getElementById('scroll-progress');

function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrollPercent + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });

// ===== Header Scroll Effect =====
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Gallery "Ver más" Toggle =====
const galeriaGrid = document.getElementById('galeria-grid');
const galeriaVerMas = document.getElementById('galeria-ver-mas');
const galeriaVerMasContainer = document.querySelector('.galeria-ver-mas-container');

if (galeriaVerMas) {
    galeriaVerMas.addEventListener('click', () => {
        galeriaGrid.classList.toggle('expanded');

        if (galeriaGrid.classList.contains('expanded')) {
            galeriaVerMas.textContent = 'Ver menos';

            // Trigger fade-in animations for newly visible items
            setTimeout(() => {
                document.querySelectorAll('.galeria-hidden.fade-in').forEach(item => {
                    if (!item.classList.contains('visible')) {
                        item.classList.add('visible');
                    }
                });
            }, 100);
        } else {
            galeriaVerMas.textContent = 'Ver más proyectos';

            // Scroll back to gallery section
            const galeria = document.getElementById('galeria');
            const headerHeight = header.offsetHeight;
            window.scrollTo({
                top: galeria.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
}

// ===== ENHANCED Fade-in Animation on Scroll with Stagger =====
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for elements in grids
            const parent = entry.target.parentElement;
            if (parent && (parent.classList.contains('servicios-grid') ||
                parent.classList.contains('galeria-grid') ||
                parent.classList.contains('metodo-grid'))) {
                const siblings = Array.from(parent.children);
                const itemIndex = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${itemIndex * 0.1}s`;
            }
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===== Form Handling =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.nombre || !data.email || !data.mensaje) {
            showNotification('Por favor, rellena todos los campos obligatorios', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Por favor, introduce un email válido', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? '#2D3436' : type === 'error' ? '#c0392b' : '#3498db'};
        color: white;
        padding: 18px 24px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 16px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: 14px;
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Add animation keyframes
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                opacity: 0.8;
                transition: opacity 0.3s;
                padding: 0;
                line-height: 1;
            }
            .notification-close:hover {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }

    // Close button handler
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== Active Nav Link Highlight =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const headerHeight = header.offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== ENHANCED Parallax Effects =====
const heroImage = document.querySelector('.hero-image');
const heroText = document.querySelector('.hero-text');
const filosofiaImage = document.querySelector('.filosofia-image');
const nosotrosImage = document.querySelector('.nosotros-image');

function updateParallax() {
    const scrolled = window.pageYOffset;

    // Hero parallax - image moves slower, text moves away
    if (heroImage && window.innerWidth > 768) {
        const heroHeight = document.querySelector('.hero').offsetHeight;
        if (scrolled < heroHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 + scrolled * 0.0002})`;
            if (heroText) {
                heroText.style.transform = `translateY(${scrolled * 0.1}px)`;
                heroText.style.opacity = 1 - (scrolled / heroHeight) * 0.5;
            }
        }
    }

    // Other images - subtle parallax (only filosofia)
    if (filosofiaImage && window.innerWidth > 768) {
        const rect = filosofiaImage.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        if (rect.top < viewHeight && rect.bottom > 0) {
            const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
            const translateY = (progress - 0.5) * 30;
            filosofiaImage.querySelector('img').style.transform = `translateY(${translateY}px) scale(1.05)`;
        }
    }
}

window.addEventListener('scroll', updateParallax, { passive: true });

// ===== Gallery Image Tilt Effect =====
document.querySelectorAll('.galeria-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotateX = y * -8;
        const rotateY = x * 8;

        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
    });
});

// ===== Text Reveal Animation on Load =====
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');

    // Animate hero elements sequentially
    const heroElements = [
        document.querySelector('.hero-label'),
        document.querySelector('.hero h1'),
        document.querySelector('.hero-subtitle'),
        document.querySelector('.hero-buttons')
    ];

    heroElements.forEach((el, i) => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            setTimeout(() => {
                el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 300 + i * 150);
        }
    });

    // Animate hero image with reveal effect
    if (heroImage) {
        heroImage.style.clipPath = 'inset(100% 0 0 0)';
        setTimeout(() => {
            heroImage.style.transition = 'clip-path 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            heroImage.style.clipPath = 'inset(0 0 0 0)';
        }, 600);
    }
});

// ===== Smooth Counter Animation for Badge =====
function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        el.textContent = current + '+';

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Observe the badge for counter animation
const experienceBadge = document.querySelector('.experience-badge .number');
if (experienceBadge) {
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(experienceBadge, 20);
                badgeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    badgeObserver.observe(experienceBadge);
}

// ===== Smooth Section Background Transition =====
const sectionColors = {
    'inicio': '#E0DDD5',
    'filosofia': '#ffffff',
    'servicios': '#E0DDD5',
    'metodo': '#ffffff',
    'galeria': '#E0DDD5',
    'nosotros': '#ffffff',
    'contacto': '#E8E5E0'
};

// ===== Image Lazy Loading with Fade =====
document.querySelectorAll('img[data-src]').forEach(img => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    observer.observe(img);
});

// ===== Cursor Glow Effect (Desktop only) =====
if (window.innerWidth > 1024) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(74, 74, 67, 0.03) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s;
        opacity: 0;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}
