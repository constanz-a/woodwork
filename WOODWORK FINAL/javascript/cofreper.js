const formulario = document.getElementById('formcofper');
const inputs = document.querySelectorAll('#formcofper input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,10}$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    address: /^[a-zA-Z\s]{5,10}$/,
    zip: /^\d{4,10}$/,
    address2: /^\d{4,6}$/,
    tarjeta: /^\d{16}$/,
    fechat: /^\d{2}\/\d{2}$/,
    cvv: /^\d{3}$/,
    cofreper: /^[\s\S]{100,300}$/,
}

const nombrecInput = document.getElementById('nombrec');
nombrecInput.addEventListener('keyup', validarNombre);
nombrecInput.addEventListener('blur', validarNombre);

const apellidocInput = document.getElementById('apellidoc');
apellidocInput.addEventListener('keyup', validarApellido);
apellidocInput.addEventListener('blur', validarApellido);

const correoInput = document.getElementById('correo');
correoInput.addEventListener('keyup', validarCorreo);
correoInput.addEventListener('blur', validarCorreo);

const ciudadInput = document.getElementById('ciudad');
ciudadInput.addEventListener('keyup', validarDireccion);
ciudadInput.addEventListener('blur', validarDireccion);

const mensajeInput = document.getElementById('mensaje');
mensajeInput.addEventListener('keyup', validarMensaje);
mensajeInput.addEventListener('blur', validarMensaje);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let formularioValido = true;
    const validaciones = [
        validarNombre(),
        validarApellido(),
        validarCorreo(),
        validarDireccion()
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
    let nombrec = document.getElementById('nombrec').value;
    let esValido = expresiones.nombre.test(nombrec);
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
    let apellidoc = document.getElementById('apellidoc').value;
    let esValido = expresiones.nombre.test(apellidoc);
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
    let correo = document.getElementById('correo').value;
    let esValido = expresiones.correo.test(correo);
    let feedbackCorreo = document.querySelector('.invalid-feedback5');
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
    let ciudad = document.getElementById('ciudad').value;
    let esValido = expresiones.address.test(ciudad);
    let feedbackDireccion = document.querySelector('.invalid-feedback3');
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
function validarMensaje(){
    let mensaje = document.getElementById('mensaje').value;
    let esValido = expresiones.cofreper.test(mensaje);
    let feedbackMensaje = document.querySelector('.invalid-feedback6');
    if (esValido) {
        console.log("muy bn");
        feedbackMensaje.style.display = "none";
        return true;
    } else {
        console.log("NO es válido");
        feedbackMensaje.style.display = "block";
        return false;
    }

}
;




