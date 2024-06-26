document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('authButton');
    const token = localStorage.getItem('token');

    if (token) {
        authButton.textContent = 'Logout';
        authButton.addEventListener('click', () => {
            localStorage.removeItem('token');
            window.location.reload();
        });
    } else {
        authButton.textContent = 'Login';
        authButton.addEventListener('click', () => {
            window.location.href = '/auth/login.html';
        });
    }
});
