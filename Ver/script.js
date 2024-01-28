var estudiantesJSON = []
var tabla = document.getElementById("tablaDatos");

const apiBase =  "http://127.0.0.1:8000"

function obtenerTodos(){
    const url = new URL(apiBase + "/obtener_todos").toString()
    fetch(url)
    .then(response => response.json())
    .then(data => {
        estudiantesJSON = data
        actualizarTabla()
    })
    .catch(error => console.log(error))
}


function actualizarTabla(){
    estudiantesJSON.forEach(function (estudiante) {
        var fila = tabla.insertRow();
        var celdaNombre = fila.insertCell(0);
        var celdaIdentificacion= fila.insertCell(1);
        var celdaSexo = fila.insertCell(2);
        var celdaEdad = fila.insertCell(3);


    
        celdaNombre.textContent = estudiante.nombre
        celdaIdentificacion.textContent = estudiante.identificacion
        celdaSexo.textContent = estudiante.sexo
        celdaEdad.textContent = estudiante.edad


      });
}

 

document.addEventListener('load', obtenerTodos())



