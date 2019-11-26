document.getElementById("instructionsPage").style.display = "none";
document.getElementById("mainPage").style.display = "none";

//Function to go from Welcome page to the instructions page
let startButton = document.getElementById('startButton');
startButton.addEventListener("click", () => {
	document.getElementById("welcomePage").style.display = "none";
	document.getElementById("instructionsPage").style.display = "block";
});

//Function to go from instructions page to the cipher/decipher main page
let nextButton = document.getElementById('nextButton');
nextButton.addEventListener("click", () => {
	document.getElementById("instructionsPage").style.display = "none";
	document.getElementById("mainPage").style.display = "block";
});

//Function to cipher a message
let encodeButton = document.getElementById('cipher');
encodeButton.addEventListener("click", () => {
	let textValue = document.getElementById("messageInput").value;
	let offsetValue = document.getElementById("numberInput").value;
	let offset = parseInt(document.getElementById("numberInput").value);
	let encoded = window.cipher.encode(offset,textValue);
	if (textValue.length === 0 || offsetValue.length === 0) {
		document.getElementById("errorMessage").innerHTML= "⚠️ Debes ingresar un valor en ambos campos";
	} else if (offset > 100) {
		document.getElementById("errorMessage").innerHTML= "⚠️ Debes ingresar un número entero del 1 al 100";
	} else {
		document.getElementById("errorMessage").innerHTML= "";
		document.getElementById("cipherDecipherMessage").innerHTML = encoded;
	}
});

//Function to decipher a message
let decodeButton = document.getElementById('decipher');
decodeButton.addEventListener("click", () => {
	let textValue = document.getElementById("messageInput").value;
	let offsetValue = document.getElementById("numberInput").value;
	let offset = parseInt(document.getElementById("numberInput").value);
	let decoded = window.cipher.decode(offset,textValue);
	if (textValue.length === 0 || offsetValue.length === 0) {
		document.getElementById("errorMessage").innerHTML= "⚠️ Debes ingresar un valor en ambos campos";
	} else if (offset > 100) {
		document.getElementById("errorMessage").innerHTML= "⚠️ Debes ingresar un número entero del 1 al 100";
	} else {
		document.getElementById("errorMessage").innerHTML= "";
		document.getElementById("cipherDecipherMessage").innerHTML = decoded;
	}
});

//Function to clear all the form values/inputs
let resetValuesButton = document.getElementById('clearValuesButton');
resetValuesButton.addEventListener("click", () => {
	document.getElementById("messageInput").value = "";
	document.getElementById("numberInput").value = "";
	document.getElementById("cipherDecipherMessage").innerHTML = "";
	document.getElementById("errorMessage").innerHTML = "";
});

//Function to copy on the clipboard the cipher/decipher message (we can use the clipboard.js API instead)
let copyMessageButton = document.getElementById('copyMessageButton');
copyMessageButton.addEventListener("click", () => {
	let message = document.getElementById("cipherDecipherMessage").innerHTML;
	if (message.length === 0) {
		document.getElementById("errorMessage").innerHTML= "⚠️ Debes cifrar/descifrar un mensaje primero";
	} else {
		let falseInput = document.createElement("input");
		falseInput.setAttribute("value", message);
		document.body.appendChild(falseInput);
		falseInput.select();
		document.execCommand("copy");
		document.body.removeChild(falseInput);
	}
});
