let reverso = true;

function cambiarCarta() {
    
  img = document.getElementById('card');
  
  if (reverso) {
    img.src = 'anverso.jpg';
  } else {
    img.src = 'reverso.png';
  }
  
  reverso = !reverso;
}
  