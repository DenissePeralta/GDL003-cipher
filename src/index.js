document.getElementById("pagina-principal").style.display = "block";
document.getElementById("pagina-secundaria").style.display = "none";
document.getElementById("mensaje-error").style.display = "none";

//Esta función es para pasar a la siguiente pantalla
function comenzar() {
	document.getElementById("pagina-principal").style.display = "none";
	document.getElementById("pagina-secundaria").style.display = "block";
}

//Esta función es para cifrar mensaje
function cifrando() {
	let valorTexto = document.getElementById("cuadro-cifrado").value;
	let valorNumero = parseInt(document.getElementById("cuadro-mov").value);
	let posicionAlfabeto = 0;
	let fraseCifrada = "";
	let formulaAlfabeto = 0;
	let formulaCesar = 0;

	if (valorTexto === "" && valorNumero === "") {
	let mensajeError = "Ingresa un valor en ambos campos!!";
	document.getElementById("mensaje-error").innerHTML = mensajeError;
  }

	for (let i = 0; i < valorTexto.length; i++) {
		valorTexto = valorTexto.toUpperCase();
    posicionAlfabeto = valorTexto.charCodeAt(i);
    formulaAlfabeto = posicionAlfabeto + valorNumero;
    if (formulaAlfabeto >= 65 && formulaAlfabeto <= 90) {
      fraseCifrada = fraseCifrada + String.fromCharCode(formulaAlfabeto);
    } else {
      formulaCesar = ((posicionAlfabeto - 65 + valorNumero) % 26) + 65;
      fraseCifrada = fraseCifrada + String.fromCharCode(formulaCesar);
    }
    document.getElementById("mensaje-cifrado").innerHTML = fraseCifrada;
	}
}

//Esta función es para descifrar mensaje
function descifrando() {
	let valorTexto = document.getElementById("cuadro-descifrado").value;
	let valorNumero = parseInt(document.getElementById("cuadro-mov2").value);
	let posicionAlfabeto = 0;
	let fraseDescifrada = "";
	let formulaAlfabeto = 0;
	let formulaCesar = 0;

	if (valorTexto === "" && valorNumero === "") {
	let mensajeError = "Ingresa un valor en ambos campos!!";
	document.getElementById("mensaje-error2").innerHTML = mensajeError;
  }

	for (let i = 0; i < valorTexto.length; i++) {
		valorTexto = valorTexto.toUpperCase();
    posicionAlfabeto = valorTexto.charCodeAt(i);
    formulaAlfabeto = posicionAlfabeto - valorNumero;
    if (formulaAlfabeto >= 65 && formulaAlfabeto <= 90) {
      fraseDescifrada = fraseDescifrada + String.fromCharCode(formulaAlfabeto);
    } else {
      formulaCesar = ((posicionAlfabeto + 65 - valorNumero) % 26) + 65;
      fraseDescifrada = fraseDescifrada + String.fromCharCode(formulaCesar);
    }
    document.getElementById("mensaje-descifrado").innerHTML = fraseDescifrada;
	}
}
//Esta función es para limpiar valores de cifrado
function LimpiarCif() {
	document.getElementById("cuadro-cifrado").value ="";
	document.getElementById("cuadro-mov").value = "";
	document.getElementById("mensaje-cifrado").innerHTML = "";;
}
//Esta función es para limpiar valores de descifrado
function LimpiarDes() {
	document.getElementById("cuadro-descifrado").value ="";
	document.getElementById("cuadro-mov2").value = "";
	document.getElementById("mensaje-descifrado").innerHTML = "";;
}
