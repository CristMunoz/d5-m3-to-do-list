// Variables
let btnAgregarTarea = document.getElementById("agregar-tarea");
const listaTareas = document.getElementById("lista-tareas")
const tareasRealizadas = document.getElementById("realizadas")
let totalTareas = document.getElementById("total")
let id = 0
let arrayInicial = []

// Botón agregar
btnAgregarTarea.addEventListener("click", () => {
    id++
    const tareas = document.getElementById("tareas").value
    if(tareas != ""){
    const objTarea = { id: id, descripcion: tareas, estado: false }
    arrayInicial.push(objTarea)
    listado(arrayInicial)
    document.getElementById("tareas").value = ""
    } else{
    alert("Debes ingresar una tarea")
    }
})

// Listado
const listado = (arrayTareas) =>{
    totalTareas.innerHTML = arrayTareas.length
    tareasRealizadas.innerHTML = ""
    let html = ""
    let contador = 0
    for(const tarea of arrayTareas){
        html += `
        <tr>
            <td ${tarea.estado ? "style= opacity: .1" : ""}>
                ${tarea.id}
            </td>
            <td ${tarea.estado ? "style= opacity: .1" : ""}>
                ${tarea.descripcion}
            </td>
            <td ${tarea.estado ? "style= visibility: hidden" : ""}>
                <input type="checkbox" onclick="cambioEstado(${tarea.id})" ${tarea.estado ? "checked" : ""}/>
            </td>
            <td ${tarea.estado}>
                <button id="eliminarTarea" type="button" onclick="eliminarTarea(${tarea.id})" ${tarea.estado ? "" : "disabled"}/>X</button>
            </td>
        </tr>`
        if(tarea.estado){contador ++}
    }
    tareasRealizadas.innerHTML = contador;
    listaTareas.innerHTML = html
}

// Eliminar tareas
const eliminarTarea = (id) => {
    arrayInicial = arrayInicial.filter((e) => e.id != id)
    listado(arrayInicial)
}

const cambioEstado = (id) => {
    arrayInicial.map((e) => {
        if(e.id == id) e.estado = !e.estado
    })
    listado(arrayInicial)
}