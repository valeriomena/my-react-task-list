//definicion del objeto
Task = {
  id,
  name: "",
  descript: "",
  date:"",
  hour: "",
  
};
//array de obejtos que simula la base de datos
baseDatos = [];
var tabletask = document.getElementById("listTask");
// se agrega un eventlistener en la tabla para identificar en que boton se hace click
tablaTitulos.addEventListener("click", verificarClick);

function verificarClick(e) { 
    //console.log("este es el evento: "+e.target.parentNode.parentNode.rowIndex);
    let table = document.getElementById("listTask");
    let index = e.target.parentNode;
    console.log("Este es el objeto que dio click de la fila "+index)
    var value = cell.innerHTML; // valor de la celda
    console.log("Contacto a eliminar: " + value);
    document.getElementById("buscar").value = value;
    //baseDatos.splice(index, 1);//Se elimina el objeto del array
    eliminar(); // se llama a eliminar para quitar el objeto
    tabla.deleteRow(index);//se elimina la fila a la que se le dio click
    
}
function CaptureTask() { 
    //console.log("CAPTURADO");
    //Definicion del objeto contacto
    function Task(id,name,descript,date,hour) { 
        this.id = id;
        this.name = name; 
        this.descript = descript;
        this.date=date; 
        this.hour=hour;
    }
    //capturando la informacion del formulario
    let nameCapture = document.getElementById("name").value;
    let descriptCapture = document.getElementById("descript").value;
    let dateCapture = document.getElementById("date").value;
    let hourCapture = document.getElementById("hour").value;
    let idCapture = baseDatos.length + 1;
    capturarUbicacion();
    // clase constructora del objeto contacto    
    newTask = new task(idCapture,hourCapture,dateCapture, descriptCapture, nameCapture);
    console.log("Nueva tarea"+ newTask);
    baseDatos.push(newTask);//crea el nuevo objeto en el array
    agregar();
   /*  contador = 0;
    habilitarBotones(); */
} 
function deletetask() { 
    var searchData = document.getElementById("buscar").value;//trae el contacto a eliminar
    //busca el objeto con concidencia por nombre
    var item = baseDatos.findIndex(elemento => elemento.cedula === searchData);
    //console.log("registro encontrado " + item);
    if (item !== -1) {
        //console.log("Entro al si")
        baseDatos.splice(item, 1);
    }
    
    console.log(baseDatos);
}
function rellenarFormulario() { 
    var searchData = document.getElementById("name").value;//trae el contacto a buscar
  //busca el objeto con concidencia por Cedula
    var item = baseDatos.findIndex(elemento => elemento.cedula === searchData);
    if (item !== -1) {
        document.getElementById("name").value = baseDatos[item].name;
        document.getElementById("descript").value = baseDatos[item].descript;
        document.getElementById("date").value = baseDatos[item].date;
        document.getElementById("hour").value = baseDatos[item].hour;
        /* contador = 6;
        document.getElementById("ubicacion").disabled = false;
        document.getElementById("delete").disabled = false;
        habilitarBotones(); */
    }
    else {
        
    }
}
function actualizarContacto() {
  var searchData = document.getElementById("cedula").value;//trae el contacto a buscar
  //busca el objeto con concidencia por Cedula
    var item = baseDatos.findIndex(elemento => elemento.cedula === searchData);
    if (item !== -1) {

        // Actualizar los campos del contacto
        baseDatos[item].nombre = document.getElementById("nombre").value;
        baseDatos[item].apellido = document.getElementById("apellido").value;
        baseDatos[item].email = document.getElementById("correo").value;
        baseDatos[item].telefono = document.getElementById("phone").value;
        // Retornar un mensaje de éxito
        alert("Contacto actualizado exitosamente.");
        /* contador = 0;
        //habilitarBotones(); */
    }
}
/* function habilitarBotones() { 
    alert(contador);
    if (contador >= 5) {
        document.getElementById("agregar").disabled = false;
        document.getElementById("actualizar").disabled = false;
    }
    else { 
        document.getElementById("agregar").disabled = true;
        document.getElementById("agregar").add('IconoGrande-deshabilitado');
        document.getElementById("actualizar").disabled = true;
        document.getElementById("actualizar").add('IconoGrande-deshabilitado');
        
    }
   
}
function contarCampos() { 
    contador += 1;
}
 */
