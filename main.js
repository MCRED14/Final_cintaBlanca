// INPUTS
const nombre = document.getElementById('nombre');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const bebida = document.getElementById('bebida');
const botones = document.querySelectorAll('.card button');
const pedido = document.getElementById('pedido');
const combos = document.querySelectorAll('.card-text');
console.log(combos);
console.log(pedido);
console.log(botones);


// RESPUESTAS
const respuestaNombre = document.getElementById('respuestaNombre');
const respuestaDireccion = document.getElementById('respuestaDireccion');
const respuestaTelefono = document.getElementById('respuestaTelefono');
const respuestaBebida = document.getElementById('respuestaBebida');

// PEDIDO
const generarOrden = () => {
  if (nombre.value === '' | direccion.value === '' | telefono.value == '') {
    alert('Debes llenar todos los campos');
  }
}


for (var i = 0; i < botones.length; i++) {
  if (botones[i].id === 'torta') {
    botones[i].addEventListener('click', () => pedido.innerHTML += 'Torta de huevo<br>');
  } else if (botones[i].id === 'huarache') {
    botones[i].addEventListener('click', () => pedido.innerHTML += 'Huarache a la mexicana<br>');
  } else if (botones[i].id === 'chilaquiles') {
    botones[i].addEventListener('click', () => pedido.innerHTML += 'Chilaquiles con carne<br>');
  }
}
