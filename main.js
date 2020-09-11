// INPUTS
const nombre = document.getElementById('nombre');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const bebida = document.getElementById('bebida');
const botones = document.querySelectorAll('.card button');
const pedido = document.getElementById('pedido');
const combos = document.querySelectorAll('.card-text');
const ordenar = document.getElementById('ordenar');
const comentarios = document.getElementById('cometarios');
// console.log(combos);
// console.log(pedido);
// console.log(botones);


// RESPUESTAS
const respuestaNombre = document.getElementById('respuestaNombre');
const respuestaDireccion = document.getElementById('respuestaDireccion');
const respuestaTelefono = document.getElementById('respuestaTelefono');
const respuestaBebida = document.getElementById('respuestaBebida');
const mostrarComentario = document.getElementById('respuestaComentarios');

// PEDIDO
const generarOrden = () => {
  if (nombre.value === '' | direccion.value === '' | telefono.value == '') {
    alert('Debes llenar todos los campos');
    // console.log('Debes llenar todos los campos');
  } else {
    console.log(nombre.value);
    console.log(direccion.value);
    console.log(telefono.value);

    let tuBebida = () => {
      if (bebida.value === 'agua') {
        respuestaBebida.innerHTML = 'Tu bebida es agua';
      } else if (bebida.value === 'refresco') {
        respuestaBebida.innerHTML = 'Tu bedida es refesco';
      } else if (bebida.value === 'te') {
        respuestaBebida.innerHTML = 'tu bebida es Té';
      }
    }
    console.log(bebida.value);

    const cubiertos = document.getElementById('cubiertos');
    console.log(cubiertos.checked);
    cubiertos.addEventListener('click', () => {
      if (cubiertos.checked)
      console.log('Agregar cubiertos');
    })

    const salsa = document.getElementById('salsa');
    console.log(salsa.checked);
    salsa.addEventListener('click', () => {
      if (salsa.checked)
      console.log('Agregar salsa extra');
    })

    const pan = document.getElementById('pan');
    console.log(pan.checked);
    pan.addEventListener('click', () => {
      if (pan.checked)
      console.log('Agregar pan');
    })

    const mostrarComentario = () => {
      respuestaComentarios.innerHTML = comentarios.value;
      console.log(mostrarComentario);
    }
    }
  }



//
// for (var i = 0; i < botones.length; i++) {
//   if (botones[i].id === 'torta') {
//     botones[i].addEventListener('click', () => pedido.innerHTML += 'Torta de huevo<br>');
//   } else if (botones[i].id === 'huarache') {
//     botones[i].addEventListener('click', () => pedido.innerHTML += 'Huarache a la mexicana<br>');
//   } else if (botones[i].id === 'chilaquiles') {
//     botones[i].addEventListener('click', () => pedido.innerHTML += 'Chilaquiles con carne<br>');
//   }
// }

ordenar.addEventListener('click', generarOrden);
