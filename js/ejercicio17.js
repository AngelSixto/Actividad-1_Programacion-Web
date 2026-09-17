const crearGestorTareas = () => {
    const CLAVE_STORAGE = 'mis_tareas_js';

    const obtenerTareas = () => {
        const tareasJSON = localStorage.getItem(CLAVE_STORAGE);
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    };

    return {
        obtener: () => obtenerTareas(),

        agregar: (textoTarea) => {
            const tareas = obtenerTareas();
            tareas.push(textoTarea);
            guardarTareas(tareas);
        },

        eliminar: (indice) => {
            const tareas = obtenerTareas();
            tareas.splice(indice, 1);
            guardarTareas(tareas);
        }
    };
};

const gestor = crearGestorTareas();

const renderizarTareas = () => {
    const listaUI = document.getElementById('listaTareas');
    listaUI.innerHTML = '';

    const tareas = gestor.obtener();

    tareas.forEach((tarea, indice) => {
        const li = document.createElement('li');
        li.textContent = tarea;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar';
        btnEliminar.onclick = () => confirmarEliminacion(indice, tarea);

        li.appendChild(btnEliminar);
        listaUI.appendChild(li);
    });
};

const agregarTarea = () => {
    const input = document.getElementById('tareaInput');
    const mensajeError = document.getElementById('mensajeError');
    const texto = input.value.trim();

    mensajeError.textContent = '';

    if (texto === '') {
        mensajeError.textContent = 'Por favor, escribe una tarea antes de agregar.';
        return;
    }

    gestor.agregar(texto);
    input.value = '';
    input.focus();
    renderizarTareas();
};

const confirmarEliminacion = (indice, tarea) => {
    Swal.fire({
        title: '¿Eliminar tarea?',
        text: `¿Estás seguro de que deseas borrar "${tarea}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmColor: '#e74c3c',
        cancelColor: '#95a5a6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            gestor.eliminar(indice);
            renderizarTareas();
            Swal.fire({
                title: '¡Eliminada!',
                text: 'La tarea ha sido borrada.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
};

document.getElementById('btnAgregar').addEventListener('click', agregarTarea);

document.getElementById('tareaInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        agregarTarea();
    }
});

document.addEventListener('DOMContentLoaded', renderizarTareas);