//
//
// let setMensaje = document.getElementById('setMensaje');
//
// if(localStorage.getItem('miNombre') != null){
//   var miNombre = localStorage.getItem('miNombre');
//   console.log(miNombre);
//   setMensaje.innerHTML = miNombre + ' Gracias por Pedir ';
// }else{
//   setMensaje.innerHTML = 'Ya pide algo CABRÓN!';
//   // innerHTML  setPregunta.innerHTML = 'Si quiere piña';
//   // agregar al html
// }

const getParams = (url) => {
    const params = {};
    const parser = document.createElement('a');
    parser.href = url;
    const query = parser.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

const generarPedido = () => {
  const { nombre, direccion, telefono, bebida, cubiertos, salsa, pan, pedido } = getParams(window.location.href);
  const html = `<div class="card" style="width: 18rem;">
                <img src="https://thumbs.dreamstime.com/z/mexican-chef-16733721.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">TU ORDEN:</h5>
                    <p class="card-text">Nombre: ${nombre}</p>
                    <p class="card-text">Dirección: ${direccion}</p>
                    <p class="card-text">Teléfono: ${telefono}</p>
                    <hr>
                    <p class="card-text">Pedido: ${pedido}</p>
                    <p class="card-text">Bebidas: ${bebida}</p>
                    <p class="card-text">Cubiertos: ${cubiertos}</p>
                    <p class="card-text">Salsa: ${salsa}</p>
                    <p class="card-text">Pan: ${pan}</p>
                    <p class="card-text">Tu orden se está preparando!:</p>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div>
                </div>`;
  const laorden = document.getElementById('laorden');
  laorden.innerHTML = html;
  return
}

generarPedido();
