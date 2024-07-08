var entradaTexto = document.querySelector(".entrada-texto");
var salidaTexto = document.querySelector(".salida-texto");
var seccionTexto1 = document.querySelector(".texto1");
var seccionTexto2 = document.querySelector(".texto2");
var btnCopiar = document.querySelector(".copiar");

function validar(textoValidar) {
  const isValid = /^[a-z\s]*$/.test(textoValidar);

  if (!isValid) {
    return false;
  } else {
    return true;
  }
}

function encriptar() {
  var texto = entradaTexto.value;
  var salida = "";
  if (!validar(texto)) {
    alert("Texto invalido, verifique su texto.");
    return;
  }
  for (var posicion = 0; posicion < texto.length; posicion++) {
    if (texto.charAt(posicion) == "a") {
      salida = salida + "ai";
    } else if (texto.charAt(posicion) == "e") {
      salida = salida + "enter";
    } else if (texto.charAt(posicion) == "i") {
      salida = salida + "imes";
    } else if (texto.charAt(posicion) == "o") {
      salida = salida + "ober";
    } else if (texto.charAt(posicion) == "u") {
      salida = salida + "ufat";
    } else {
      salida = salida + texto.charAt(posicion);
    }
  }
  entradaTexto.value = "";
  salidaTexto.value = salida;
  ocultar();
}

function desencriptar() {
  var texto = entradaTexto.value;
  var salida = "";
  if (!validar(texto)) {
    alert("Texto invalido, verifique su texto.");
    return;
  }
  for (var posicion = 0; posicion < texto.length; posicion++) {
    if (texto.charAt(posicion) == "a" && texto.charAt(posicion + 1) == "i") {
      salida = salida + "a";
      posicion = posicion + 1;
    } else if (
      texto.charAt(posicion) == "e" &&
      texto.charAt(posicion + 1) == "n" &&
      texto.charAt(posicion + 2) == "t" &&
      texto.charAt(posicion + 3) == "e" &&
      texto.charAt(posicion + 4) == "r"
    ) {
      salida = salida + "e";
      posicion = posicion + 4;
    } else if (
      texto.charAt(posicion) == "i" &&
      texto.charAt(posicion + 1) == "m" &&
      texto.charAt(posicion + 2) == "e" &&
      texto.charAt(posicion + 3) == "s"
    ) {
      salida = salida + "i";
      posicion = posicion + 3;
    } else if (
      texto.charAt(posicion) == "o" &&
      texto.charAt(posicion + 1) == "b" &&
      texto.charAt(posicion + 2) == "e" &&
      texto.charAt(posicion + 3) == "r"
    ) {
      salida = salida + "o";
      posicion = posicion + 3;
    } else if (
      texto.charAt(posicion) == "u" &&
      texto.charAt(posicion + 1) == "f" &&
      texto.charAt(posicion + 2) == "a" &&
      texto.charAt(posicion + 3) == "t"
    ) {
      salida = salida + "u";
      posicion = posicion + 3;
    } else {
      salida = salida + texto.charAt(posicion);
    }
  }
  entradaTexto.value = "";
  salidaTexto.value = salida;
  ocultar();
}

function ocultar() {
  salidaTexto.style.background = "white";
  seccionTexto1.style.display = "none";
  seccionTexto2.style.display = "none";
  btnCopiar.style.display = "";
}

function mostrar() {
  salidaTexto.style.background = "#FFF no-repeat center url(assets/img/buscar.png)";
  seccionTexto1.style.display = "";
  seccionTexto2.style.display = "";
  btnCopiar.style.display = "none";
}

function copiar() {
  var copia = salidaTexto.value;
  navigator.clipboard.writeText(copia);

  var anuncio = document.querySelector(".anuncio");
  anuncio.textContent = "Texto copiado";
  anuncio.style.display = "block";
  setTimeout(() => {
    anuncio.style.display = "none";
  }, 950);
  salidaTexto.value = "";
  mostrar();
}
