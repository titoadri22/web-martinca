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

// ===== Header Scroll Effect - Smart Sticky =====
const header = document.getElementById('header');
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = header ? header.offsetHeight : 0;

window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero') || document.querySelector('.blog-post-header-section');
    const heroHeight = heroSection ? heroSection.offsetHeight : 0;
    const st = window.pageYOffset || document.documentElement.scrollTop;

    // Transparency Logic
    if (heroHeight > 0) {
        if (st > heroHeight * 0.4) {
            header.classList.add('scrolled');
            header.classList.remove('header--transparent');
        } else {
            header.classList.remove('scrolled');
            header.classList.add('header--transparent');
        }
    } else {
        // For pages without hero (like internal pages), always scrolled style
        header.classList.add('scrolled');
        header.classList.remove('header--transparent');
    }

    // Hide/Show on Scroll Logic
    if (st > navbarHeight) {
        // Always hide if scrolled down past navbar
        header.classList.add('header--hidden');
    } else {
        // Show if at top (and let transparency logic handle style)
        header.classList.remove('header--hidden');
    }

    lastScrollTop = st;
});

// ===== Hero Image Crossfade Slideshow (DISABLED for Video Background) =====
/*
(function () {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);
})();
*/

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Simple Fade-in on Scroll =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===== Gallery Filter + "Ver más" Toggle =====
const galeriaGrid = document.getElementById('galeria-grid');
const galeriaVerMas = document.getElementById('galeria-ver-mas');
const galeriaVerMasContainer = document.querySelector('.galeria-ver-mas-container');
const filtroButtons = document.querySelectorAll('.filtro-btn');

if (filtroButtons.length > 0 && galeriaGrid) {
    let currentFilter = 'todos';
    let isExpanded = false;

    function applyFilter() {
        const items = galeriaGrid.querySelectorAll('.galeria-item');

        items.forEach(item => {
            const category = item.dataset.category;
            const isHidden = item.classList.contains('galeria-hidden');
            const matchesFilter = currentFilter === 'todos' || category === currentFilter;

            item.classList.remove('filter-hidden', 'filter-visible');

            if (!matchesFilter) {
                item.classList.add('filter-hidden');
            } else if (currentFilter !== 'todos') {
                item.classList.add('filter-visible');
            }
        });

        if (galeriaVerMasContainer) {
            if (currentFilter !== 'todos') {
                galeriaVerMasContainer.classList.add('hidden');
            } else {
                const hiddenItems = galeriaGrid.querySelectorAll('.galeria-hidden');
                if (hiddenItems.length > 0 && !isExpanded) {
                    galeriaVerMasContainer.classList.remove('hidden');
                } else {
                    galeriaVerMasContainer.classList.add('hidden');
                }
            }
        }

        // Make newly visible items show
        setTimeout(() => {
            galeriaGrid.querySelectorAll('.galeria-item:not(.filter-hidden)').forEach(item => {
                item.classList.add('visible');
            });
        }, 50);
    }

    filtroButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filtroButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilter();
        });
    });

    // Check URL for category parameter on load
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        const targetBtn = Array.from(filtroButtons).find(btn => btn.dataset.filter === categoryParam);
        if (targetBtn) {
            // Give a tiny delay to ensure DOM is ready
            setTimeout(() => {
                targetBtn.click();

                // Scroll to gallery section so the user sees the filtered results
                const galeriaSection = galeriaGrid.closest('section');
                if (galeriaSection) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    window.scrollTo({
                        top: galeriaSection.offsetTop - headerHeight - 20,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }

    if (galeriaVerMas) {
        galeriaVerMas.addEventListener('click', () => {
            isExpanded = !isExpanded;
            galeriaGrid.classList.toggle('expanded', isExpanded);

            if (isExpanded) {
                galeriaVerMas.textContent = 'Ver menos';
            } else {
                galeriaVerMas.textContent = 'Ver más proyectos';
                const galeria = galeriaGrid.closest('section');
                if (galeria) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    window.scrollTo({
                        top: galeria.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            }
            applyFilter();
        });
    }
}

// ===== Lightbox Gallery (GLightbox) =====
if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
}

// ===== Form Handling =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        if (!data.nombre || !data.email || !data.mensaje) {
            alert('Por favor, rellena todos los campos obligatorios.');
            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ===== Outdoor Gallery Modal =====
(function () {
    const modal = document.getElementById('outdoor-gallery-modal');
    if (!modal) return;

    const overlay = modal.querySelector('.outdoor-modal-overlay');
    const closeBtn = modal.querySelector('.outdoor-modal-close');
    const titleEl = document.getElementById('outdoor-modal-title');
    const track = document.getElementById('outdoor-carousel-track');
    const prevBtn = modal.querySelector('.outdoor-carousel-prev');
    const nextBtn = modal.querySelector('.outdoor-carousel-next');
    const dotsContainer = document.getElementById('outdoor-carousel-dots');

    let currentIndex = 0;
    let slidesCount = 0;

    // Open Modal
    document.querySelectorAll('.btn-outdoor-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const imagesStr = btn.getAttribute('data-images');
            const title = btn.getAttribute('data-title');

            if (imagesStr) {
                try {
                    const images = JSON.parse(imagesStr);
                    if (images.length > 0) {
                        openModal(images, title);
                    }
                } catch (e) {
                    console.error("Error parsing images JSON", e);
                }
            }
        });
    });

    function openModal(images, title) {
        titleEl.textContent = title || '';
        track.innerHTML = '';
        dotsContainer.innerHTML = '';
        slidesCount = images.length;
        currentIndex = 0;

        // Populate track
        images.forEach((src, idx) => {
            const slide = document.createElement('div');
            slide.className = 'outdoor-carousel-slide';
            const img = document.createElement('img');
            img.src = src;
            img.alt = `${title} image ${idx + 1}`;
            slide.appendChild(img);
            track.appendChild(slide);

            // Populate dots
            if (slidesCount > 1) {
                const dot = document.createElement('div');
                dot.className = 'outdoor-dot' + (idx === 0 ? ' active' : '');
                dot.addEventListener('click', () => goToSlide(idx));
                dotsContainer.appendChild(dot);
            }
        });

        // Hide arrows if only 1 image
        if (slidesCount <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }

        updateCarousel();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        const dots = dotsContainer.querySelectorAll('.outdoor-dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function nextSlide() {
        if (slidesCount <= 1) return;
        currentIndex = (currentIndex + 1) % slidesCount;
        updateCarousel();
    }

    function prevSlide() {
        if (slidesCount <= 1) return;
        currentIndex = (currentIndex - 1 + slidesCount) % slidesCount;
        updateCarousel();
    }

    function goToSlide(idx) {
        currentIndex = idx;
        updateCarousel();
    }

    // Event Listeners
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
})();

// La velocidad del vídeo de fondo está reducida directamente desde el propio archivo (inicio_slower.mp4)


