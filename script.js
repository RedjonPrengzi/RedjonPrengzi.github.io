// Mobile menu functionality - wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!mobileMenuBtn || !mobileMenu) return;

    const menuLinks = mobileMenu.querySelectorAll('a');
    let lastFocusedElement = null;

    function openMenu() {
        lastFocusedElement = document.activeElement;
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        if (menuLinks.length > 0) menuLinks[0].focus();
    }

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (lastFocusedElement) lastFocusedElement.focus();
    }

    function toggleMenu() {
        if (mobileMenu.classList.contains('hidden')) openMenu();
        else closeMenu();
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            closeMenu();
            mobileMenuBtn.focus();
        }
    });

    // Close on outside tap (backdrop click — the menu fills the screen)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) closeMenu();
    });

    // Focus trap: cycle Tab within the menu while open
    mobileMenu.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || mobileMenu.classList.contains('hidden') || menuLinks.length === 0) return;

        const firstLink = menuLinks[0];
        const lastLink = menuLinks[menuLinks.length - 1];

        if (e.shiftKey && document.activeElement === firstLink) {
            e.preventDefault();
            lastLink.focus();
        } else if (!e.shiftKey && document.activeElement === lastLink) {
            e.preventDefault();
            firstLink.focus();
        }
    });

    // Make closeMobileMenu available globally (used by inline onclick handlers on nav links)
    window.closeMobileMenu = closeMenu;
});
