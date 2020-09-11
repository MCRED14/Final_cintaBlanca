

let setMensaje = document.getElementById('setMensaje');

if(localStorage.getItem('miNombre') != null){
  var miNombre = localStorage.getItem('miNombre');
  console.log(miNombre);
  setMensaje.innerHTML = miNombre + ' Gracias por Pedir ';
}else{
  setMensaje.innerHTML = 'Ya pide algo CABRÓN!';
  // innerHTML  setPregunta.innerHTML = 'Si quiere piña';
  // agregar al html
}
