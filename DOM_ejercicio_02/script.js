
let variableEstado = false;

button = document.querySelector("#btn");

button.addEventListener("click", cambioVariable);

function cambioVariable() {
  
  variableEstado = !variableEstado;

  p = document.querySelector("#num");

  if (variableEstado) {
    p.innerHTML = "La variable está en true";
  } else {
    p.innerHTML = "La variable está en false";
  }
}