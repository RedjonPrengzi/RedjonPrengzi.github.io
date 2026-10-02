const copyEmailButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');

if (copyEmailButton && copyStatus) {
    copyEmailButton.addEventListener('click', async () => {
        copyEmailButton.disabled = true;
        copyStatus.textContent = '';
        try {
            await navigator.clipboard.writeText('prengzi.redjon@gmail.com');
            copyStatus.textContent = 'Address copied.';
        } catch {
            copyStatus.textContent = 'Couldn’t copy. Select the address above, or click it to open your email app.';
        } finally {
            copyEmailButton.disabled = false;
        }
    });
}