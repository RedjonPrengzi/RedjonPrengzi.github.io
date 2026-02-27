tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#3b82f6",
                "depth-black": "#030303",
                "depth-charcoal": "#0a0a0c",
            },
            fontFamily: {
                "sans": ["'Plus Jakarta Sans'", "sans-serif"],
                "serif": ["'Playfair Display'", "serif"]
            }
        },
    },
}

// Mobile menu functionality - wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    function toggleMenu() {
        const isMenuOpen = mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');

        // Toggle icons
        if (!isMenuOpen) {
            // Menu is now open
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            // Menu is now closed
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMenu);

        // Make closeMobileMenu available globally
        window.closeMobileMenu = closeMenu;
    }
});
