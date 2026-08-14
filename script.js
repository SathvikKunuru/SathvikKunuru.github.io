document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       Sticky Navigation on Scroll
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       Intersection Observer for Scroll Animations
       ========================================================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements to animate
    const animateElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });

    /* ==========================================================================
       Smooth Scrolling for Anchor Links
       ========================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust for navbar height
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       Mobile Menu Toggle (Placeholder logic)
       ========================================================================== */
    const hamburger = document.querySelector('.hamburger');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // In a full implementation, this would toggle a mobile menu dropdown
            alert('Mobile menu toggle to be implemented!');
        });
    }

    /* ==========================================================================
       Glow Effect following mouse (Optional Enhancement)
       ========================================================================== */
    // Uncomment this to have a glow effect follow the mouse on desktop
    /*
    const mouseGlow = document.createElement('div');
    mouseGlow.style.position = 'fixed';
    mouseGlow.style.width = '400px';
    mouseGlow.style.height = '400px';
    mouseGlow.style.borderRadius = '50%';
    mouseGlow.style.background = 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(0,0,0,0) 70%)';
    mouseGlow.style.pointerEvents = 'none';
    mouseGlow.style.transform = 'translate(-50%, -50%)';
    mouseGlow.style.zIndex = '-1';
    mouseGlow.style.transition = 'opacity 0.3s ease';
    mouseGlow.style.opacity = '0';
    document.body.appendChild(mouseGlow);

    document.addEventListener('mousemove', (e) => {
        mouseGlow.style.opacity = '1';
        mouseGlow.style.left = e.clientX + 'px';
        mouseGlow.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseleave', () => {
        mouseGlow.style.opacity = '0';
    });
    */
});
