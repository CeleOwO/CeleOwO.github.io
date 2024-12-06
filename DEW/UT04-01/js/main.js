
const DOM = {
    form: document.querySelector('form'),
    nombre: document.getElementById('nombreUser'),
    apellido: document.getElementById('apellido'),
    email: document.getElementById('email'),
    contra: document.getElementById('contra'),
    checkpass: document.getElementById('checkpass'),
    anionacimiento: document.getElementById('anionacimiento'),
    titulo: document.getElementById('tituloDescripcion'),
    descripcion: document.getElementById('descripcion')
};

DOM.checkpass.addEventListener('change', showPassword);


DOM.form.addEventListener('submit', (e) => {
    let hasErrors = false;

    // Validate individual fields
    const fields = ['nombreUser', 'contra', 'nombreUser', 'apellido', 'telefono', 'anionacimiento', 'tituloDescripcion', 'descripcion'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const message = field.validationMessage;
        let messageElement = field.nextElementSibling;
        if (messageElement && messageElement.classList.contains('validation-message')) {
            messageElement.textContent = message;
        } else {
            messageElement = document.createElement('span');
            messageElement.classList.add('validation-message');
            messageElement.textContent = message;
            messageElement.style.color = 'red';
            messageElement.style.marginLeft = '1em';
            field.parentNode.insertBefore(messageElement, field.nextSibling);
        }
        if (message !== "") {
            hasErrors = true;
        }
    });

    // Validate account type selection
    const accountTypeRadios = document.querySelectorAll('input[name="CuentaComo"]');
    let accountTypeSelected = false;
    accountTypeRadios.forEach(radio => {
        if (radio.checked) {
            accountTypeSelected = true;
        }
    });

    let accountTypeMessageElement = document.querySelector('.account-type-validation-message');
    if (!accountTypeSelected) {
        if (!accountTypeMessageElement) {
            accountTypeMessageElement = document.createElement('span');
            accountTypeMessageElement.classList.add('account-type-validation-message');
            accountTypeMessageElement.style.color = 'red';
            accountTypeMessageElement.style.marginLeft = '1em';
            accountTypeMessageElement.textContent = 'Porfavor selecciona un tipo de cuenta.';
            accountTypeRadios[0].parentNode.appendChild(accountTypeMessageElement);
        }
        hasErrors = true;
    } else if (accountTypeMessageElement) {
        accountTypeMessageElement.remove();
    }

    // Validate hobbies selection
    const checkboxes = document.querySelectorAll('.hobby');
    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });
    if (checkedCount < 2) {
        document.getElementById('hobbiesValidation').textContent = 'Por favor, selecciona al menos 2 aficiones.';
        hasErrors = true;
    } else {
        document.getElementById('hobbiesValidation').textContent = '';
    }

    if (hasErrors) {
        e.preventDefault();
    }
});
function updateTituloCharCount() {
    const tituloInput = document.getElementById('tituloDescripcion');
    const charCountSpan = document.getElementById('tituloCharCount');
    charCountSpan.textContent = `${tituloInput.value.length}/15`;
}

document.getElementById('tituloDescripcion').addEventListener('input', updateTituloCharCount);

function updateDescripcionCharCount() {
    const descripcionInput = document.getElementById('descripcion');
    const charCountSpan = document.getElementById('charCount');
    charCountSpan.textContent = `${descripcionInput.value.length}/120`;
}

document.getElementById('descripcion').addEventListener('input', updateDescripcionCharCount);

function populateYearOptions(startYear, endYear) {
    const select = document.getElementById('anionacimiento');
    for (let year = startYear; year <= endYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    }
}

populateYearOptions(1920, 2010);

export function showPassword() {
    const passwordInput = document.getElementById('contra');
    const checkbox = document.getElementById('checkpass');

    if (checkbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}