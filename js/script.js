class Producto {
    constructor(nombre, apellido, mail) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
    }
    
   
}

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function recuperarProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
} 

function guardarDatos() {
    let valorNombre = document.getElementById("nombre").value;
    let valorApellido = document.getElementById("apellido").value;
    let valorMail = document.getElementById("mail").value;

    let nuevoProducto = new Producto(valorNombre, valorApellido, valorMail);
   
    guardarProductosLS(productos);
    document.getElementById('resultado').innerHTML = `<div class="alert alert-success" role="alert">Los datos se guardaron correctamente!</div>`; 
}

function eliminarDatos() {
    localStorage.removeItem("productos");
    document.getElementById('resultado').innerHTML = `<div class="alert alert-success" role="alert">Los datos se eliminaron correctamente!</div>`;
}

document.getElementById("btnGuardarDatos").addEventListener("click", guardarDatos);
document.getElementById("btnEliminarDatos").addEventListener("click", eliminarDatos);