function abrirMenu() {
  const aux = document.getElementById("menuDesplegable")
  aux.classList.toggle("mostrar")
} 
window.onclick = function(event) {
  if (!event.target.matches('#botonMenu') && !event.target.matches('#barraMenu')) {
    var dropdowns = document.getElementsByClassName("menuDesplegable");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('mostrar')) {
        openDropdown.classList.remove('mostrar');
      }
    }
  }
} 
  