let listaContactos= [
{nombre:"Pedro perez"}, 
{nombre:"Juan Martinez"}, 
{nombre:"Alberto Rojas"}
]

function agregarContacto(nuevoContacto){
    listaContactos.push(nuevoContacto)
    return nuevoContacto
}

function borrarcontacto(nombreContacto){
    let lista = listaContactos.filter((contacto) => contacto.nombre !== nombreContacto);
  listaContactos = lista;
}
function imprimirlista(){
    console.log(listaContactos)
}

// agregarContacto({nombre: "jose guillen"})

// imprimirlista()

// borrarcontacto("jose guillen")

// imprimirlista()