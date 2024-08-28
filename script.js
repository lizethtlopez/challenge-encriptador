const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Función de encriptar
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Función de desencriptar
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada
}

// Función de copiar texto
document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("botoncopiado");
    var cuadroDeTexto = document.querySelector(".mensaje");

    boton.addEventListener("click", function() {
        copiarTexto(cuadroDeTexto);
    });
});

function copiarTexto(cuadroDeTexto) {
    cuadroDeTexto.select();
    cuadroDeTexto.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert("Texto copiado: " + cuadroDeTexto.value);
}
