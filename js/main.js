function renderPosts() {
    fetch('./js/productos.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenido = "";

        for (const serv of data) {
            contenido += `<div class="col-md-3 mb-3">
            <div class="card border-0" style="height: 31rem; background-color: rgb(232, 230, 230); width: 20rem;">
            <img src=${serv.imagen} alt="${serv.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${serv.nombre}</h5>
                <p class="card-text">$${serv.precio}</p>
                <a href="/pages/contacto.html" class="btn btn-primary">Turno</a>
            </div>
            </div>
            </div>`;
        }

        document.getElementById("resultado").innerHTML = contenido;
    })
    .catch(error => {
        document.getElementById("resultado").innerHTML = `<div class="alert alert-danger p-5 text-center" role="alert">Error! No se encuentra la URL a la que desea acceder!</div>`;
    })
}

renderPosts();
