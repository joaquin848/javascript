class Producto {
    constructor(nombre,descripcion,precio,stock){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.ivaAplicado = false;
    };
    iva(){
    this.precio = this.precio + this.precio * 0.21;
    this.ivaAplicado = true;
    };
};
let continuar = true
while(continuar){
    const nombreProducto = prompt("Cual es el nombre de su producto?");
    const descripcionProducto = prompt("Como es su producto?");
    const precioProducto = parseFloat(prompt ("Cual es su precio?"));
    const stockProducto = parseInt(prompt("Cual es su stock?"));
    const producto = new Producto(
        nombreProducto,
        descripcionProducto,
        precioProducto,
        stockProducto,
    );
alert("  Nombre: " + producto.nombre + "  Descripción: " + producto.descripcion + "  Precio: " + producto.precio + "$   Stock: " + producto.stock)
const iva = confirm("Quiere aplicar el iva?")
if( iva == true ){
    producto.iva();
    alert("  Nombre: " + producto.nombre + "  Descripción: " + producto.descripcion + "  Precio: " + producto.precio + "$   Stock: " + producto.stock)
};
continuar = confirm("Quiere seguir cargando productos?")
};