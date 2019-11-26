document.getElementById("pagina-instrucciones").style.display = "none";
document.getElementById("pagina-secundaria").style.display = "none";

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
	let offsetValue = document.getElementById("cuadro-mov").value;
	let offset = parseInt(document.getElementById("cuadro-mov").value);
	let encoded = window.cipher.encode(offset,textValue);
	if (textValue.length === 0 || offsetValue.length === 0) {
		document.getElementById("mensaje-error").innerHTML= "⚠️ Debes ingresar un valor en ambos campos";
	} else if (offset > 100) {
		document.getElementById("mensaje-error").innerHTML= "⚠️ Debes ingresar un número entero del 1 al 100";
	} else {
		document.getElementById("mensaje-error").innerHTML= "";
		document.getElementById("mensaje-cifrado").innerHTML = encoded;
	}
});

//Esta función es para descifrar mensaje
let btnDecode = document.getElementById('descifrar');
btnDecode.addEventListener("click", () => {
	let textValue = document.getElementById("cuadro-cifrado").value;
	let offsetValue = document.getElementById("cuadro-mov").value;
	let offset = parseInt(document.getElementById("cuadro-mov").value);
	let decoded = window.cipher.decode(offset,textValue);
	if (textValue.length === 0 || offsetValue.length === 0) {
		document.getElementById("mensaje-error").innerHTML= "⚠️ Debes ingresar un valor en ambos campos";
	} else if (offset > 100) {
		document.getElementById("mensaje-error").innerHTML= "⚠️ Debes ingresar un número entero del 1 al 100";
	} else {
		document.getElementById("mensaje-error").innerHTML= "";
		document.getElementById("mensaje-cifrado").innerHTML = decoded;
	}
});

//Esta función es para limpiar valores de cifrado
let btnClearEncode = document.getElementById('limpiar-valores');
btnClearEncode.addEventListener("click", () => {
	document.getElementById("cuadro-cifrado").value = "";
	document.getElementById("cuadro-mov").value = "";
	document.getElementById("mensaje-cifrado").innerHTML = "";
});

//Esta función es para copiar el mensaje cifrado/descifrado en el portapapeles (se puede usar tmb clipboard.js)
let btnCopyMessage = document.getElementById('copiar-mensaje');
btnCopyMessage.addEventListener("click", () => {
	let mensaje = document.getElementById("mensaje-cifrado").innerHTML;
	if (mensaje.length === 0) {
		document.getElementById("mensaje-error").innerHTML= "⚠️ Debes cifrar/descifrar un mensaje primero";
	} else {
		let inputFalso = document.createElement("input");
		inputFalso.setAttribute("value", mensaje);
		document.body.appendChild(inputFalso);
		inputFalso.select();
		document.execCommand("copy");
		document.body.removeChild(inputFalso);
	}
});
