document.addEventListener('DOMContentLoaded', () => {
    // Scroll-animasjoner
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Spesialeffekt for DSB-merket
                if (entry.target.classList.contains('hero-section')) {
                    const badge = document.querySelector('.dsb-badge');
                    badge.style.animation = 'none';
                    void badge.offsetWidth; // Trigger reflow
                    badge.style.animation = 'pulse 2s infinite';
                }
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('.fullscreen-section').forEach(section => {
        observer.observe(section);
    });

    // Parallax-effekt for desktop
    const updateParallax = () => {
        if (window.innerWidth > 768) {
            document.querySelectorAll('.product-section, .quality-section').forEach(section => {
                section.style.backgroundAttachment = 'fixed';
            });
        } else {
            document.querySelectorAll('.product-section, .quality-section').forEach(section => {
                section.style.backgroundAttachment = 'scroll';
            });
        }
    };

    window.addEventListener('resize', updateParallax);
    updateParallax();
});
