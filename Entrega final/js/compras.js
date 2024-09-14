
let productosIngresados = localStorage.getItem("Carrito");
    console.log(productosIngresados)
    productosIngresados = JSON.parse(productosIngresados);
let eliminarProducto = document.querySelectorAll(".carritoProductoEliminar");
const mensajeVacio = document.getElementById("mensajeVacio");
const tarjetaProductos = document.getElementById("tarjetaProductos");
const tarjetaAcciones = document.getElementById("tarjetaAcciones");
const valorTotal = document.querySelector("#total");
const mensajeCompras = document.getElementById("mensajeCompra");
const vaciarcarrito = document.querySelector(".vaciarcarrito");
const comprar = document.querySelector(".carritoComprar");

function cargarTarjetas(){

    if(productosIngresados && productosIngresados.length >0){

        mensajeVacio.classList.add("oculto");
        tarjetaProductos.classList.remove("oculto");
        tarjetaAcciones.classList.remove("oculto");
        mensajeCompras.classList.add("oculto");
    
    
        tarjetaProductos.innerHTML = "";
    
        productosIngresados.forEach(producto => {
    
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("carritoProducto");
            tarjeta.innerHTML = `
            <img class="imgCarProductos" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="carritoTituloProducto">
                            <small>Nombre</small>
                            <h3>${producto.titulo}</h3>
                        </div>
                        <div class="carritoCantidadProducto">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="carritoPrecioProducto">
                            <small>Precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carritoSubTotalProducto">
                            <small>SubTotal</small>
                            <p>$${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="carritoProductoEliminar" id="${producto.id}"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
            
            `;
    
            tarjetaProductos.append(tarjeta);
            
        });
    
    }else{
    
        mensajeVacio.classList.remove("oculto");
        tarjetaProductos.classList.add("oculto");
        tarjetaAcciones.classList.add("oculto");
        mensajeCompras.classList.add("oculto");
    
    
    
    }

    eliminarProductos();
    totalCompra();

}

cargarTarjetas();


function eliminarProductos(){
    eliminarProducto = document.querySelectorAll(".carritoProductoEliminar");

    eliminarProducto.forEach(borrar =>{
        borrar.addEventListener("click",borrarProductos);
    });


    
}

function borrarProductos(e){
    const btnId = e.currentTarget.id;
    const indice = productosIngresados.findIndex(producto => producto.id === btnId);
   
    Swal.fire({
        title: "DESEAS ELIMINAR ESTE PRODUCTO?",
        text: "no hay manera de revertir este movimiento!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            productosIngresados.splice(indice,1);
            cargarTarjetas();
            localStorage.setItem("Carrito", JSON.stringify(productosIngresados));
          Swal.fire({
            title: "Eliminado!",
            text: "El producto se elimino de tu lista de compras.",
            icon: "success"
          });
        }
      });
    


}

function eliminarTodaLaCompra(){
    productosIngresados.length = 0;

    Swal.fire({
        title: "DESEAS ELIMINAR TODOS LOS PRODUCTOS DEL CARRITO?",
        text: "no hay manera de revertir este movimiento!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("Carrito", JSON.stringify(productosIngresados));
            cargarTarjetas();
          Swal.fire({
            title: "Productos eliminados!",
            text: "Tu carrito quedo vacio😔",
            icon: "success"
          });
        }
      });
    

}

vaciarcarrito.addEventListener("click",eliminarTodaLaCompra);

function totalCompra(){
    const valor = productosIngresados.reduce((cuenta,producto) => cuenta + (producto.precio * producto.cantidad),0);
    valorTotal.innerText =`$${valor}`;

}

function realizarCompra(){
    mensajeCompras.classList.add("oculto");
    let timerInterval;
Swal.fire({
  title: "Estamos procesando tu compra!",
  html: "El proceso terminara en <b></b> milisegundos.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {    
productosIngresados.length = 0;
localStorage.setItem("Carrito", JSON.stringify(productosIngresados));
mensajeCompras.classList.remove("oculto");
   
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "COMPRA REALIZADA",
    showConfirmButton: false,
    timer: 1500
  });

});
   

        mensajeVacio.classList.add("oculto");
        tarjetaProductos.classList.add("oculto");
        tarjetaAcciones.classList.add("oculto");
        

}

comprar.addEventListener("click",realizarCompra);