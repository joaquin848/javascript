class Producto {
    constructor(nombreproducto,descripcionproducto,precioproducto,stockproducto){
        this.nombreproducto = nombreproducto
        this.descripcionproducto = descripcionproducto
        this.precioproducto = precioproducto
        this.stockproducto = stockproducto
        this.fechaAdquisicion = new Date()
        
    }
    aumento(porcentaje){
        this.precioproducto = this.precioproducto + this.precioproducto * porcentaje
        this.fechaAdquisicion = new Date()
    }
}
const productos = []
let continuar = true

while(continuar === true){
    const nombreproducto = prompt("Cual es el nombre del producto?").toUpperCase()
    const descripcionproducto = prompt("Como es el producto?").toUpperCase()
    const precioproducto = parseFloat(prompt("Cual es el precio?")) 
    const stockproducto = parseInt(prompt("Cuantos posee?")) 
    const producto = new Producto(nombreproducto,descripcionproducto,precioproducto,stockproducto)
    productos.push(producto)
    continuar = confirm("Desea agregar más productos?")
}
console.log(productos)
continuar = confirm("Desea eliminar un producto?")
while(continuar){
    const productoNombreEliminar = prompt("Que producto desea eliminar?").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombreproducto === productoNombreEliminar)
    if(index != -1){
        productos.splice(index,1)
        alert("Producto eliminado con éxito")
    }else{
        alert("No existe el producto que desea eliminar, por favor reescriba el nombre de forma correcta")
    }
    continuar = confirm("Desea eliminar un producto?")
}

console.log(productos)
continuar = confirm("Desea actualizar algún producto?")
while(continuar){
    const productoNombreActualizar = prompt("que producto desea actualizar?").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombreproducto === productoNombreActualizar)
    if(index != -1){
        const nombreproducto = prompt("Cual es su nombre?").toUpperCase()
        const descripcionproducto = prompt("Cómo es el producto?").toUpperCase()
        const precioproducto = parseFloat(prompt("Cual es el nuevo precio?")) 
        const stockproducto = parseInt(prompt("Cuantos posee actualmente?"))
        productos[index].nombreproducto = nombreproducto
        productos[index].descripcionproducto = descripcionproducto
        productos[index].precioproducto = precioproducto
        productos[index].stockproducto = stockproducto
        productos[index].fechaAdquisicion = new Date()
        alert("Producto actualizado")
    }else{
        alert("No existe el producto que desea actualizar, por favor reescriba el nombre de forma correcta")
    }
    continuar = confirm("Desea actualizar algún producto?")
}
console.log(productos)

continuar = confirm("Quiere aumentar el precio de algún producto")
while(continuar){
    const productoNombreActualizar = prompt("que producto quiere aumentar?").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombreproducto === productoNombreActualizar)
    if(index != -1){
        const procertajeActualizado = parseFloat(prompt("Ingrese que porcentaje quiere aumentar el producto"))
        productos[index].aumento(procertajeActualizado) 
        alert("El precio del producto ha sido actualizado")
    }else{
        alert("No existe el producto que desea actualizar su precio, por favor reescriba el nombre de forma correcta")
    }
    continuar = confirm("Quiere aumentar el precio de algún producto?")
}

console.log(productos)