/* Obtener listado de datos */
const API_URL = '//localhost:8080/api/inscripciones/listar';

/* Obtener datos para llenar la tabla de inscripciones */
const tblInscripciones = document.getElementsByName("tblInscripciones");
if (tblInscripciones) {
    const CONTENEDOR = document.querySelector("tbody");
    const FOOT = document.querySelector("tfoot");
    let result = '';
    let resumen = '';

    const mostrar = (inscripciones) => {
        resumen += `<tr>
                        <td colspan="11"><strong>Total Inscritos: ${inscripciones.length}</strong></td>
                    </tr>`
        inscripciones.forEach(inscripcion => {
            result += `<tr>
                            <td>${inscripcion.idInscr}</td>
                            <td>${inscripcion.curso.id}</td>
                            <td>${inscripcion.curso.nombre}</td>
                            <td>${inscripcion.curso.instructor.nombre}</td>
                            <td>${inscripcion.persona.idPersona}</td>
                            <td>${inscripcion.persona.nombrePersona}</td>
                            <td>${inscripcion.fechaIni}</td>
                            <td>${inscripcion.fechaFin}</td>
                            <td>${inscripcion.certificado}</td>
                            <td class="text-success"><i class="bi bi-pencil-square"></i></td>
                            <td class="text-danger"><i class="bi bi-trash"></i></td>
                    </tr>`
        })

        CONTENEDOR.innerHTML = result
        FOOT.innerHTML = resumen
    };

    fetch(`${API_URL}`)
        .then(response => response.json())
        .then(data => mostrar(data))
        .catch(error => console.log(error))
}


/* Obtener datos para llenar el select de cursos */
const OBJ_CURSOS = document.getElementById('nombrecurso');

if (OBJ_CURSOS) {
    const API_URL_CURSOS = '//localhost:8080/api/cursos/listar'

    fetch(`${API_URL_CURSOS}`)
        .then(response => response.json())
        .then(data => fillCursos(data))
        .catch(error => console.log(error))


    function fillCursos(cursosJson) {
        for (let curso of cursosJson) {
            let newOption = document.createElement("option");
            newOption.value = curso.id;
            newOption.text = curso.nombre;
            OBJ_CURSOS.add(newOption);
            // select.appendChild(nuevaOpcion); <-- Así tambien funciona
        }
    }
}

/* Manejador de eventos */
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

if (tblInscripciones) {
    /* Procedimiento Editar */
    on(document, 'click', '.bi-pencil-square', e => {
        const MODAL_INSCR = new bootstrap.Modal(document.getElementById('modalInscripcion'))
        
        let fila = e.target.parentNode.parentNode
        let idInscr = fila.children[0].innerHTML

        document.getElementById('ModalLabel').innerHTML = 'Modificación de Inscripción (Id. # ' + idInscr + ')'
        document.getElementById('idInscr').value = idInscr;
        document.getElementById('nombrecurso').value = fila.children[1].innerHTML;
        document.getElementById('nombreinstructor').value = fila.children[3].innerHTML;
        document.getElementById('idestudiante').value = fila.children[4].innerHTML;
        document.getElementById('nomestudiante').value = fila.children[5].innerHTML;
        document.getElementById('finicio').value = fila.children[6].innerHTML;
        document.getElementById('ffin').value = fila.children[7].innerHTML;
        document.getElementById('estadocertif').value = fila.children[8].innerHTML;

        //window.location.href = "inscripcion-crear.html";
        MODAL_INSCR.show()
        
    })

    /* Procedimiento Borrar */
    on(document, 'click', '.bi-trash', e => {
        let fila = e.target.parentNode.parentNode
        let idInscr = fila.firstElementChild.innerHTML
        const API_URL_DEL = '//localhost:8080/api/inscripciones/' + idInscr;

        swal({
            title: "¿Está ud. seguro?",
            text: "Una vez eliminado, no se podrá recuperar este registro.",
            icon: "warning",
            buttons: true,
            buttons: ["Cancelar", "Eliminar"],
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                fetch(`${API_URL_DEL}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then( response => {
                    swal("¡El registro ha sido eliminado!", {icon: "success",});
                    //location.reload();
                })
                location.reload();
            } else {
                swal("La eliminación ha sido cancelada.");
            }
        })
    })
}
