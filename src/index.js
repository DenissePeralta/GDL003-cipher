document.getElementById("pagina-instrucciones").style.display = "none";
document.getElementById("pagina-secundaria").style.display = "none";
document.getElementById("mensaje-error").style.display = "none";

//Esta función es para pasar de la página de inicio a la pantalla de instrucciones
let btnComenzar = document.getElementById('comenzar');
btnComenzar.addEventListener("click", () => {
	document.getElementById("pagina-inicio").style.display = "none";
	document.getElementById("pagina-instrucciones").style.display = "block";
});

//Esta función es para pasar de la pantalla de instrucciones a la de cifrado y descifrado
let btnSiguiente = document.getElementById('siguiente');
btnSiguiente.addEventListener("click", () => {
	document.getElementById("pagina-instrucciones").style.display = "none";
	document.getElementById("pagina-secundaria").style.display = "block";
});

//Esta función es para cifrar mensaje
let btnEncode = document.getElementById('cifrar');
btnEncode.addEventListener("click", () => {
	let textValue = document.getElementById("cuadro-cifrado").value;
	let offset = parseInt(document.getElementById("cuadro-mov").value);
	let encoded = window.cipher.encode(offset,textValue);
	if (textValue.length === 0 || offset.length === 0) {
		document.getElementById("mensaje-error").style.display = "block";
	} else {
		document.getElementById("mensaje-error").style.display = "none";
	}
	document.getElementById("mensaje-cifrado").innerHTML = encoded;
});

//Esta función es para descifrar mensaje
let btnDecode = document.getElementById('descifrar');
btnDecode.addEventListener("click", () => {
	let textValue = document.getElementById("cuadro-cifrado").value;
	let offset = parseInt(document.getElementById("cuadro-mov").value);
	let decoded = window.cipher.decode(offset,textValue);
	if (textValue.length === 0 || offset.length === 0) {
		document.getElementById("mensaje-error").style.display = "block";
	} else {
		document.getElementById("mensaje-error").style.display = "none";
	}
	document.getElementById("mensaje-cifrado").innerHTML = decoded;
});

//Esta función es para limpiar valores de cifrado
let btnClearEncode = document.getElementById('limpiar-valores');
btnClearEncode.addEventListener("click", () => {
	document.getElementById("cuadro-cifrado").value = "";
	document.getElementById("cuadro-mov").value = "";
	document.getElementById("mensaje-cifrado").innerHTML = "";
});
