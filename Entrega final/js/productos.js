const productos = [

    {
        id:"aceite",
        titulo:"Aceite",
        imagen:"img/alimentos/aceite.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:9000
    },
    {
        id:"arepas",
        titulo:"Arepas",
        imagen:"img/alimentos/arepas.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:3000
    },
    {
        id:"arroz",
        titulo:"Arroz",
        imagen:"img/alimentos/arroz.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:1800
    },
    {
        id:"azucar",
        titulo:"Azucar",
        imagen:"img/alimentos/azucar.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:3000
    },
    {
        id:"lentejas",
        titulo:"Lentejas",
        imagen:"img/alimentos/lenteja.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:2500
    },
    {
        id:"frijoles",
        titulo:"Frijoles",
        imagen:"img/alimentos/frijoles.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:4600
    },
    {
        id:"maiz",
        titulo:"maiz",
        imagen:"img/alimentos/maiz.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:1500
    },
    {
        id:"sal",
        titulo:"Sal",
        imagen:"img/alimentos/sal.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:1200
    },
    {
        id:"pan",
        titulo:"Pan",
        imagen:"img/alimentos/pan.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:5000
    },
    {
        id:"pollo",
        titulo:"Pollo",
        imagen:"img/alimentos/pollo.jpg",
        categoria:{
            nombre:"ALIMENTOS",
            id:"ALIMENTOS"
        },
        precio:20000
    },
    {
        id:"detergenteEnPolvo",
        titulo:"Detergente en polvo",
        imagen:"img/aseoHogar/detergenteEnPolvo.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:8000
    },
    {
        id:"detergenteLiquido",
        titulo:"Detergente liquido",
        imagen:"img/aseoHogar/detergenteLiquido.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:12000
    },
    {
        id:"ambientador",
        titulo:"Ambientador",
        imagen:"img/aseoHogar/ambientador.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:9000
    },
    {
        id:"fabuloso",
        titulo:"Fabuloso",
        imagen:"img/aseoHogar/fabuloso.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:4500
    },
    {
        id:"jabonAzul",
        titulo:"Jabó n Rey",
        imagen:"img/aseoHogar/jabonAzul.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:2800 
    },
    {
        id:"lavaPlatos",
        titulo:"Lava Platos",
        imagen:"img/aseoHogar/lavaPlatos.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:6000
    },
    {
        id:"limpiaVidrios",
        titulo:"Limpia vidrios",
        imagen:"img/aseoHogar/limpiaVidrios.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:4000
    },
    {
        id:"limpido",
        titulo:"Limpido",
        imagen:"img/aseoHogar/limpido.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:2000
    },
    {
        id:"toallasDeCocina",
        titulo:"Toallas de cocina",
        imagen:"img/aseoHogar/toallasDeCocina.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:3500
    },
    {
        id:"recojedor",
        titulo:"Recojedor",
        imagen:"img/aseoHogar/recojedor.jpg",
        categoria:{
            nombre:"ASEO HOGAR",
            id:"ASEO HOGAR"
        },
        precio:5500
    },
    {
        id:"tollas",
        titulo:"Toallas Nosotras",
        imagen:"img/aseoPersonal/toallas.jpg",
        categoria:{
            nombre:"ASEO PERSONAL",
            id:"ASEO PERSONAL"
        },
        precio:13000
    },
    {
        id:"cepillos",
        titulo:"Cepillo dental",
        imagen:"img/aseoPersonal/talco.jpg",
        categoria:{
            nombre:"ASEO PERSONAL",
            id:"ASEO PERSONAL"
        },
        precio:7800
    },
    {
        id:"desodorante",
        titulo:"Desodorante Dove",
        imagen:"img/aseoPersonal/desodoranteMujer.jpg",
        categoria:{
            nombre:"ASEO PERSONAL",
            id:"ASEO PERSONAL"
        },
        precio:11000
    },
    {
        id:"cuchillas",
        titulo:"Maquina de afeitar",
        imagen:"img/aseoPersonal/cuchillas.jpg",
        categoria:{
            nombre:"ASEO PERSONAL",
            id:"ASEO PERSONAL"
        },
        precio:18000
    },
    {
        id:"cremaDental",
        titulo:"Crema de dientes",
        imagen:"img/aseoPersonal/cremaDental.jpg",
        categoria:{
            nombre:"ASEO PERSONAL",
            id:"ASEO PERSONAL"
        },
        precio:4500
    },
    {
        id:"jabonLiquido",
        titulo:"Jabón antibacterial",
        imagen:"img/aseoPersonal/jabonLiquido.jpg",
        categoria:{
            nombre:"ASEO PERSONAL",
            id:"ASEO PERSONAL"
        },
        precio:14000
    },
    {
        id:"cremaDemanos",
        titulo:"Crema corporal",
        imagen:"img/aseoPersonal/cremaDeManos.jpg",
        categoria:{
            nombre:"ASEO PERSONAL",
            id:"ASEO PERSONAL"
        },
        precio:23000
    },

];

const cargaProductos = document.querySelector("#cargaProductos");
const botonesMenu = document.querySelectorAll(".btnMenu");
const tituloCategorias = document.getElementById("tituloCategorias");
const conteo = document.querySelector("#contador");
let productoAgregar = document.querySelectorAll(".productoAgregar");

function cargaDeProductos(categoria){

cargaProductos.innerHTML = "";

    categoria.forEach(producto =>{

        const caja = document.createElement("div");
        caja.classList.add("producto");
        caja.innerHTML = `
                <img class="prImagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="informacionProducto">
                    <h3 class="tituloProducto">${producto.titulo}</h3>
                    <p class="productoPrecio">$${producto.precio}</p>
                    <button class="productoAgregar" id="${producto.id}">AGREGAR</button>
                </div>
        `;

        cargaProductos.append(caja);

    })
    
    cargarBotones();


}
cargaDeProductos(productos)

botonesMenu.forEach(btn =>{
    btn.addEventListener("click",(e) =>{

        botonesMenu.forEach(btn => btn.classList.remove("activo"));
        e.currentTarget.classList.add("activo");
        
        const nombreCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        const listado = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

        (e.currentTarget.id != "todos") ?  cargaDeProductos(listado) : cargaDeProductos(productos);
        
        (e.currentTarget.id != "todos") ? tituloCategorias.innerText = nombreCategoria.categoria.nombre  : tituloCategorias.innerText ="TODOS LOS PRODUCTOS";
        
    })

});

function cargarBotones(){
    productoAgregar = document.querySelectorAll(".productoAgregar");

    productoAgregar.forEach(btn =>{
        btn.addEventListener("click", articuloSeleccionado);
    })
};

let productoSeleccionado;
const productosEnLinea = JSON.parse(localStorage.getItem("Carrito"));

if(productosEnLinea){
    productoSeleccionado = productosEnLinea;
    totalProductos();
}else{
    productoSeleccionado = [];
}

function articuloSeleccionado(e){

    const idSeleccion = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idSeleccion);

    if(productoSeleccionado.some(producto => producto.id === idSeleccion)){
        const indice = productoSeleccionado.findIndex(producto => producto.id === idSeleccion);
        productoSeleccionado[indice].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productoSeleccionado.push(productoAgregado);
    }   
    
    totalProductos();

    localStorage.setItem("Carrito", JSON.stringify(productoSeleccionado));
    Swal.fire("¡Agregado al carrito!");
    
};



function totalProductos(){
    let contador = productoSeleccionado.reduce((cuenta, producto)=>cuenta + producto.cantidad,0);
    conteo.innerText = contador;
}

