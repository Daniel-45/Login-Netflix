const inputs = document.querySelectorAll('form .field input');
const showHidePassword = document.querySelector('form .field span');

document.addEventListener('DOMContentLoaded', () => {
    inputs.forEach(input => {
        input.addEventListener('blur', validateInputs);
    });

    inputs.forEach(input => {
        input.addEventListener('input', validateInputs);
    });

    // Show and hide password
    // Mostrar y ocultar contraseña
    showHidePassword.addEventListener('click', e =>  {
        const inputPassword = document.querySelector('#password');

        if (e.target.classList.contains('show')) {
            // Show text
            // Mostrar texto
            e.target.classList.remove('show');
            inputPassword.type = 'text';
        } else {
            // Hide text
            // Ocultar texto
            e.target.classList.add('show');
            inputPassword.type = 'password';
        }
    });
});

function validateInputs(e) {
    const status = ['valid', 'invalid'];

    let mClass;

    if (e.target.value.length === 0) {
        mClass = status[1];
    } else {
        mClass = status[0];
    }

    e.target.classList.remove(...status);
    e.target.nextElementSibling.classList.remove(...status);
    e.target.classList.add(mClass);
    e.target.nextElementSibling.classList.add(mClass);

    // Dynamically display div with error
    // Mostrar dinámicamente el div con error
    if (mClass === 'invalid') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alert') {
            const divError = document.createElement('div');
            divError.appendChild(document.createTextNode('Campo obligatorio'));
            divError.classList.add('alert');
            e.target.parentElement.parentElement.insertBefore(divError, e.target.parentElement.nextElementSibling);
        }
    } else {
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alert') {
            e.target.parentElement.nextElementSibling.remove()
        }
    }
}