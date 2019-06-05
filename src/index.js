document.getElementById("pagina-principal").style.display = "block";
document.getElementById("pagina-secundaria").style.display = "none";

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

	/*if (valorTexto === "" && valorNumero === "") {
    document.getElementById("mensaje-error").innerHTML = "¡Por favor ingresa un valor en ambos campos!";
  }*/

  for (let i = 0; i < valorTexto.length; i++) {
    valorTexto = valorTexto.toUpperCase();
    posicionAlfabeto = valorTexto.charCodeAt(i);
    formulaAlfabeto = posicionAlfabeto + valorNumero;
    if (formulaAlfabeto < 91) {
      fraseCifrada = fraseCifrada + String.fromCharCode(formulaAlfabeto);
    } else {
      formulaCesar = ((posicionAlfabeto - 65 + valorNumero) % 26) + 65;
      fraseCifrada = fraseCifrada + String.fromCharCode(formulaCesar);
    }
    document.getElementById("mensaje-cifrado").innerHTML = fraseCifrada;
  }
}
