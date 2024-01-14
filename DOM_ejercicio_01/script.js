let numero = parseInt(prompt("Introduce un número"));

button = document.querySelector("#btn");

button.addEventListener("click", addNumber);

p = document.querySelector("#num");

p.innerHTML = numero;


function addNumber() {
 
  p = document.querySelector("#num");
 
  p.innerHTML = parseInt(p.innerHTML) + numero;
}

