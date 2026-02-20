function showAndroidModal() {
    const modal = document.getElementById('androidModal');
    modal.classList.add('modal-open');

    // Trap focus inside modal
    const focusableElements = modal.querySelectorAll('a[href], button:not([disabled]), textarea, input[type="text"], input[type="email"], input[type="number"], select');
    if (focusableElements.length > 0) {
        focusableElements[0].focus();
    }
}

function closeAndroidModal() {
    const modal = document.getElementById('androidModal');
    modal.classList.remove('modal-open');

    // Return focus to the trigger button
    document.querySelector('[onclick="showAndroidModal()"]').focus();
}

function handleAndroidModalKeyboard(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showAndroidModal();
    }
}

function handleModalCloseKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        closeAndroidModal();
    }
}

window.onclick = function (event) {
    const modal = document.getElementById('androidModal');
    if (event.target == modal) closeAndroidModal();
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    const modal = document.getElementById('androidModal');
    if (event.key === 'Escape' && modal.classList.contains('modal-open')) {
        closeAndroidModal();
    }
});