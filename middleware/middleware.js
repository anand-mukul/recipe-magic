document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) {
        const attemptedUrl = window.location.href;
        localStorage.setItem('attemptedUrl', attemptedUrl);
        window.location.href = '/auth/login.html';
    }

    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('token');
            window.location.href = '/index.html';
        });
    }
});
