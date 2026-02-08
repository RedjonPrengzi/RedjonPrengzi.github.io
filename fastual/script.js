document.addEventListener('DOMContentLoaded', () => {
    // Simple fade-in animation for hero elements
    const elements = document.querySelectorAll('.hero-content > *');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Stagger the animation
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});