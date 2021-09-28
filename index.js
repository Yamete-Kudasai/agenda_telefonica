document.getElementById('formulario-datos').addEventListener('submit', guardarContacto)

function guardarContacto (e){
    let nombre = document.getElementById ('nombre').value
    let numero = document.getElementById('numero').value
    let ciudad = document.getElementById('ciudad').value
    
    const contacto = {
        nombre,
        numero,
        ciudad
    };

    if (localStorage.getItem('contactos') === null){
        let contactos = [];
        contactos.push(contacto);
        localStorage.setItem('contactos', JSON.stringify(contactos));
    } else {
        let contactos = JSON.parse(localStorage.getItem('contactos'));
        contactos.push(contacto);
        localStorage.setItem('contactos', JSON.stringify(contactos));
    }
    window.location.href = '/'
    e.preventDefault();
}
function mostrarContactos (){
    let contactos = JSON.parse(localStorage.getItem('contactos'));
    let contactosView = document.getElementById('listado-contactos');
    
    contactosView.innerHTML = '';

    for(let i = 0; i < contactos.length; i++){
        let nombre = contactos[i].nombre
        let numero = contactos[i].numero
        let ciudad = contactos[i].ciudad

        contactosView.innerHTML += `<div class="card card-contactos mt-3 mb-3">
        <h3 class="col-3 ">${nombre}</h3>
        <p class="col-3 pt-1">${numero}</p>
        <p class="col-3 pt-1">${ciudad}</p>
        <i class="btn fas fa-trash-alt col-3 pt-2" aria-hidden="true" onclick='eliminarContacto("${nombre}")'></i>
    </div>`
    }

}
function eliminarContacto (nombre){
    let contactos =JSON.parse(localStorage.getItem('contactos'));
    for (let i = 0; i < contactos.length; i++){
        if(contactos[i].nombre == nombre ){
            contactos.splice(i, 1);
        }
    }
    localStorage.setItem('contactos', JSON.stringify(contactos));
    mostrarContactos();
}
mostrarContactos();