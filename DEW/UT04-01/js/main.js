
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
    if(!DOM.contra.validationMessage == "")
    {
        e.preventDefault()
        alert(DOM.contra.validationMessage)
    }
});

export function anios() {
    const selectElement = document.getElementById('fecha');
    const currentYear = new Date().getFullYear();
    const startYear = 1920;
    
    for (let year = startYear; year <= currentYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.text = year;
        selectElement.appendChild(option);
    }
}


export function showPassword() {
    const passwordInput = document.getElementById('contra');
    const checkbox = document.getElementById('checkpass');

    if (checkbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}