export function showPassword() {
    const passwordInput = document.getElementById('contra');
    const checkbox = document.getElementById('checkpass');

    if (checkbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}