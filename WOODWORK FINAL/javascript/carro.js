const formulario = document.getElementById('formcarrito');
const inputs = document.querySelectorAll('#formcarrito input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,10}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    address: /^[a-zA-Z\s]{10,50}$/,
    zip: /^\d{4,10}$/,
    address2: /^\d{4,6}$/,
    tarjeta: /^\d{16}$/,
    fechat: /^\d{2}\/\d{2}$/,
    cvv: /^\d{3}$/
}

const firstNameInput = document.getElementById('firstName');
firstNameInput.addEventListener('keyup', validarNombre);
firstNameInput.addEventListener('blur', validarNombre);

const lastNameInput = document.getElementById('lastName');
lastNameInput.addEventListener('keyup', validarApellido);
lastNameInput.addEventListener('blur', validarApellido);

const emailInput = document.getElementById('email');
emailInput.addEventListener('keyup', validarCorreo);
emailInput.addEventListener('blur', validarCorreo);

const addressInput = document.getElementById('address');
addressInput.addEventListener('keyup', validarDireccion);
addressInput.addEventListener('blur', validarDireccion);

const address2Input = document.getElementById('address2');
address2Input.addEventListener('keyup', validarDireccion2);
address2Input.addEventListener('blur', validarDireccion2);

const zipInput = document.getElementById('zip');
zipInput.addEventListener('keyup', validarZip);
zipInput.addEventListener('blur', validarZip);

const radioButtons = document.querySelectorAll('input[name="paymentMethod"]');
const feedbackMessage = document.querySelector('.invalid-feedback12');

const ccnameInput = document.getElementById('ccname');
ccnameInput.addEventListener('keyup', validarNombreTitular);
ccnameInput.addEventListener('blur', validarNombreTitular);

const ccnumberInput = document.getElementById('ccnumber');
ccnumberInput.addEventListener('keyup', validarTarjeta);
ccnumberInput.addEventListener('blur', validarTarjeta);

const ccexpirationInput = document.getElementById('ccexpiration');
ccexpirationInput.addEventListener('keyup', validarFecha);
ccexpirationInput.addEventListener('blur', validarFecha);

const cvvInput = document.getElementById('cvv');
cvvInput.addEventListener('keyup', validarCvv);
cvvInput.addEventListener('blur', validarCvv);

function validarNombre() {
    let firstName = document.getElementById('firstName').value;
    let esValido = expresiones.nombre.test(firstName);
    let feedbackNombre = document.querySelector('.invalid-feedback');
    if (esValido) {
        console.log("El nombre es válido");
        feedbackNombre.style.display = "none";

    } else {
        console.log("El nombre NO es válido");
        feedbackNombre.style.display = "block";
    }
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let formularioValido = true;
    const validaciones = [
        validarNombre(),
        validarApellido(),
        validarCorreo(),
        validarDireccion(),
        validarDireccion2(),
        validarZip(),
        validatePaymentMethod(),
        validarNombreTitular(),
        validarTarjeta(),
        validarFecha(),
        validarCvv()
    ];

    for (let validacion of validaciones) {
        if (!validacion) {
            formularioValido = false;
            break;
        }
    }

    if (formularioValido) {
        formulario.submit();
    } else {
        console.log("El formulario no es válido, por favor corrige los errores.");
    }
});

function validarNombre() {
    let firstName = document.getElementById('firstName').value;
    let esValido = expresiones.nombre.test(firstName);
    let feedbackNombre = document.querySelector('.invalid-feedback');
    if (esValido) {
        console.log("El nombre es válido");
        feedbackNombre.style.display = "none";
        return true;
    } else {
        console.log("El nombre NO es válido");
        feedbackNombre.style.display = "block";
        return false;
    }
}
function validarApellido(){
    let lastName = document.getElementById('lastName').value;
    let esValido = expresiones.nombre.test(lastName);
    let feedbackApellido = document.querySelector('.invalid-feedback2');
    if (esValido) {
        console.log("El apellido es válido");
        feedbackApellido.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackApellido.style.display = "block";
        return false;
    }

}
;
function validarCorreo(){
    let email = document.getElementById('email').value;
    let esValido = expresiones.correo.test(email);
    let feedbackCorreo = document.querySelector('.invalid-feedback3');
    if (esValido) {
        console.log("muy bn");
        feedbackCorreo.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackCorreo.style.display = "block";
        return false;
    }

}
;
function validarDireccion(){
    let address = document.getElementById('address').value;
    let esValido = expresiones.address.test(address);
    let feedbackDireccion = document.querySelector('.invalid-feedback4');
    if (esValido) {
        console.log("muy bn");
        feedbackDireccion.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackDireccion.style.display = "block";
        return false;
    }

}
;
function validarDireccion2(){
    let address2 = document.getElementById('address2').value;
    let esValido = expresiones.address2.test(address2);
    let feedbackDireccion2 = document.querySelector('.invalid-feedback5');
    if (esValido) {
        console.log("muy bn");
        feedbackDireccion2.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackDireccion2.style.display = "block";
        return false;
    }

}
;
function validarZip(){
    let zip = document.getElementById('zip').value;
    let esValido = expresiones.zip.test(zip);
    let feedbackZip = document.querySelector('.invalid-feedback8');
    if (esValido) {
        console.log("muy bn");
        feedbackZip.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackZip.style.display = "block";
        return false;
    }

}
;
function validatePaymentMethod() {
    let selected = false;
    radioButtons.forEach((radio) => {
        if (radio.checked) {
            selected = true;
        }
    });
    if (!selected) {
        feedbackMessage.style.display = 'block';
        return false
    } else {
        feedbackMessage.style.display = 'none';
        return true;
    }
}
radioButtons.forEach((radio) => {
    radio.addEventListener('change', validatePaymentMethod);
});

function validarNombreTitular(){
    let ccname = document.getElementById('ccname').value;
    let esValido = expresiones.nombre.test(ccname);
    let feedbackNombreTitular = document.querySelector('.invalid-feedback9');
    if (esValido) {
        console.log("muy bn");
        feedbackNombreTitular.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackNombreTitular.style.display = "block";
        return false;
    }

}
;
function validarTarjeta(){
    let ccnumber = document.getElementById('ccnumber').value;
    let esValido = expresiones.tarjeta.test(ccnumber);
    let feedbackTarjeta = document.querySelector('.invalid-feedback10');
    if (esValido) {
        console.log("muy bn");
        feedbackTarjeta.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackTarjeta.style.display = "block";
        return false;
    }

}
;
function validarFecha(){
    let ccexpiration = document.getElementById('ccexpiration').value;
    let esValido = expresiones.fechat.test(ccexpiration);
    let feedbackFecha = document.querySelector('.invalid-feedback11');
    if (esValido) {
        console.log("muy bn");
        feedbackFecha.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackFecha.style.display = "block";
        return false;
    }

}
;
function validarCvv(){
    let cvv = document.getElementById('cvv').value;
    let esValido = expresiones.cvv.test(cvv);
    let feedbackCVV = document.querySelector('.invalid-feedback12');
    if (esValido) {
        console.log("muy bn");
        feedbackCVV.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackCVV.style.display = "block";
        return false;
    }

}
;

