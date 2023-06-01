const productos = [
    {
        id:1,
        nombre: "Bicicleta Mountainbike Rallegh",
        precio:120000,
        descripcion: "Bicicleta Mountain Bike Ralllegh; rodado 29 con 21 velocidades, suspensión delantera, frenos a disco, cuadro de acero importado de alta calidad. Con un diseño versátil y audaz. ",
        stock:2,
        urlImg:"https://http2.mlstatic.com/D_NQ_NP_2X_994906-MLA53489346953_012023-F.webp"
    },
    {
        id:2,
        nombre: "Bicicleta de paseo",
        precio:80000,
        descripcion: "Este modelo vintage rodado 26, presenta un asiento en material acolchado, super cómodos y con un manubrio que permite una postura relajada al andar, con la espalda recta.",
        stock:58,
        urlImg:"https://http2.mlstatic.com/D_NQ_NP_860451-MLA43450631006_092020-O.webp"
    },
    {
        id:3,
        nombre: "Bicicleta electrica",
        precio:300000,
        descripcion: "Recorre la ciudad con la máxima comodidad. Esta bicicleta cuenta con 5 niveles de asistencia, batería SAMSUNG y un motor de 250w que permiten movilizarse por toda la ciudad sin cansarse.",
        stock:21,
        urlImg: "https://http2.mlstatic.com/D_NQ_NP_637122-MLA54385708392_032023-O.webp"
    },
    {
        id:4,
        nombre: "Bicicleta de carreras",
        precio:200000,
        descripcion: "Las bicicletas fixie, son bicis de una sola marcha, de piñón fijo, y sin punto muerto, por lo que se debe avanzar, frenar y dar marcha atrás con el uso de los pedales.",
        stock:65,
        urlImg:"https://http2.mlstatic.com/D_NQ_NP_744087-MLA52384392099_112022-O.webp"
    },
    {
        id:5,
        nombre: "Bicicleta BMX",
        precio:60000,
        descripcion: "Bicicleta creada especialmente para hacer freestyle o acrobacias, rodado 20, cuadro de aluminio y equipada con 1 velocidad.",
        stock:21,
        urlImg:"https://http2.mlstatic.com/D_NQ_NP_618344-MLA50007645865_052022-O.webp"
    }
]

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []

const verProducto = ({id,nombre,precio,descripcion,stock,urlImg}) =>{
    const contenedorTarjetas = document.querySelector("#contenedorTarjetas")
    const tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = `
                        <img src="${urlImg}" alt="">
                        <div class="contenido">
                            <h3>${nombre}</h3>
                            <p>${descripcion}</p>
                            <span><b>Precio:</b> ${precio}$</span>
                        </div>
                        <form id="formCarrito${id}">
                        <input name="id" type="hidden" value="${id}">
                        <input name="cantidad" type="number" value="1" min="1" max="${stock}">
                        <button type="submit">Agregar al carrito</button>
                        </form>
                        
    `
    contenedorTarjetas.append(tarjeta)
}

const agregarCarrito = (id) =>{
    const formCarrito = document.querySelector("#formCarrito" + id)
    formCarrito.addEventListener("submit",(e)=>{
        e.preventDefault()
        const cantidad = e.target.children["cantidad"].value
        carrito.push({
            id,
            cantidad
        })
        localStorage.setItem("carrito",JSON.stringify(carrito))
    })
}
const verProductos = () =>{

    productos.forEach(producto =>{
        if(producto.stock !=0){
            verProducto(producto)
            agregarCarrito(producto.id)
        }
        
    })
}

verProductos()