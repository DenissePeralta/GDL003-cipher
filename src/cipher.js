window.cipher = {
  // ...
};
document.getElementById("pagina-principal").style.display = "block";
document.getElementById("pagina-secundaria").style.display = "none";

//Esta función es para pasar a la siguiente pantalla
function comenzar() {
  document.getElementById("pagina-principal").style.display = "none";
  document.getElementById("pagina-secundaria").style.display = "block";
}
