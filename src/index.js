document.getElementById("pagina-principal").style.display = "block";
document.getElementById("pagina-secundaria").style.display = "none";
document.getElementById("mensaje-error").style.display = "none";
document.getElementById("mensaje-error2").style.display = "none";

//Esta función es para pasar a la siguiente pantalla
let btnComenzar = document.getElementById('comenzar');
btnComenzar.addEventListener("click", () => {
	document.getElementById("pagina-principal").style.display = "none";
	document.getElementById("pagina-secundaria").style.display = "block";
});

//Esta función es para cifrar mensaje
let btnEncode = document.getElementById('cifrar');
btnEncode.addEventListener("click", () => {
	let textValue = document.getElementById("cuadro-cifrado").value;
	let offset = parseInt(document.getElementById("cuadro-mov").value);
	let cifrar = window.cipher.encode(offset,textValue);
	if (textValue === "" || offset === "") {
		document.getElementById("mensaje-error").style.display = "block";
	} else {
		document.getElementById("mensaje-error").style.display = "none";
	}
	document.getElementById("mensaje-cifrado").innerHTML = cifrar;
});

//Esta función es para descifrar mensaje
let btnDecode = document.getElementById('descifrar');
btnDecode.addEventListener("click", () => {
	let textValue = document.getElementById("cuadro-descifrado").value;
	let offset = parseInt(document.getElementById("cuadro-mov2").value);
	let descifrar = window.cipher.decode(offset,textValue);
	if (textValue === "" || offset === "") {
		document.getElementById("mensaje-error2").style.display = "block";
	} else {
		document.getElementById("mensaje-error2").style.display = "none";
	}
	document.getElementById("mensaje-descifrado").innerHTML = descifrar;
});

//Esta función es para limpiar valores de cifrado
let btnClearEncode = document.getElementById('limpiar-valores');
btnClearEncode.addEventListener("click", () => {
	document.getElementById("cuadro-cifrado").value = "";
	document.getElementById("cuadro-mov").value = "";
	document.getElementById("mensaje-cifrado").innerHTML = "";
});
//Esta función es para limpiar valores de descifrado
let btnClearDecode = document.getElementById('limpiar-valores2');
btnClearDecode.addEventListener("click", () => {
	document.getElementById("cuadro-descifrado").value = "";
	document.getElementById("cuadro-mov2").value = "";
	document.getElementById("mensaje-descifrado").innerHTML = "";
});
