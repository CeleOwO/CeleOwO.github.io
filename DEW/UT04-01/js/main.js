
const DOM = {
    form: document.querySelector('form'),
    nombre: document.getElementById('nombreUser'),
    apellido: document.getElementById('apellido'),
    email: document.getElementById('email'),
    contra: document.getElementById('contra'),
    checkpass: document.getElementById('checkpass'),
    fecha: document.getElementById('fecha'),
};

DOM.form.addEventListener('submit', (e) => { 
    if(!DOM.nombre.validationMessage=="") {
        e.preventDefault()
        alert(DOM.nombre.validationMessage);
    }
    if(!DOM.apellido.validationMessage=="") {
        e.preventDefault()
        alert(DOM.apellido.validationMessage);
    }
    if(!DOM.email.validationMessage=="") {
        e.preventDefault()
        alert(DOM.email.validationMessage);
    }
});


export function showPassword() {
    const passwordInput = document.getElementById('contra');
    const checkbox = document.getElementById('checkpass');

    if (checkbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}