let listaContactos = [
  {
    id: 1,
    nombre: "Pedro",
    apellidos: "Perez",
    telefono: +584241536489,
    ubicaciones: {
      ciudad: "Caracas",
      direccion: "la rinconada"
    }
  },
  {   id: 2,
    nombre: "juan",
    apellidos: "Martinez",
    telefono: +584121235896,
    ubicaciones: {
      ciudad: "El tigre",
      direccion: "calle 13 sur"
    }},
  { id: 3,
    nombre: "Alberto",
    apellidos: "Rojas",
    telefono: +584162356987,
    ubicaciones: {
      ciudad: "El tigre",
      direccion: "av. 5 de julio"
    } },
];

function agregarContacto(nuevoContacto) {
  listaContactos.push(nuevoContacto);
  return nuevoContacto;
}

function borrarcontacto(idContacto) {
  let lista = listaContactos.filter(
    (contacto) => contacto.id !== idContacto
  );
  listaContactos = lista;
}
function imprimirlista() {
  console.log(listaContactos);
}
function editarContacto(listaC,id,idnumero,propiedad,valorPropiedad){
  const lista = listaContactos.find(list => list[id]===idn)
  if (lista ){ 
    lista[propiedad]= valorPropiedad
  }
}

//  agregarContacto({id: 4,
//     nombre: "Alberto",
//     apellidos: "Rojas",
//     telefono: +584162356987,
//     ubicaciones: {
//       ciudad: "El tigre",
//       direccion: "av. 5 de julio"}})

// imprimirlista()

// borrarcontacto(3)

 imprimirlista()
editarContacto(listaContactos,'id',2,'nombre','Juancho')
console.log(listaContactos)
