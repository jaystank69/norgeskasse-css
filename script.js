document.addEventListener('DOMContentLoaded', () => {
    // Scroll-animasjoner
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Spesialeffekt for priser
                if (entry.target.querySelector('.price')) {
                    entry.target.querySelector('.price').style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        entry.target.querySelector('.price').style.transform = 'scale(1)';
                    }, 500);
                }
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.fullscreen-section').forEach(section => {
        observer.observe(section);
    });

    // Parallax-effekt for bilder (skrus av på mobil)
    if (window.innerWidth > 768) {
        document.querySelectorAll('.product-section').forEach(section => {
            section.style.backgroundAttachment = 'fixed';
        });
    }
});
