const estudiantes = [];

function agregarEstudiante() {
    const inputNombre = document.getElementById('nombreInput');
    const inputCalificacion = document.getElementById('calificacionInput');
    const mensajeError = document.getElementById('mensajeError');
    const totalRegistrados = document.getElementById('totalRegistrados');

    mensajeError.textContent = '';

    const nombre = inputNombre.value.trim();
    const calificacionTexto = inputCalificacion.value.trim();

    if (nombre === '' || calificacionTexto === '') {
        mensajeError.textContent = 'Por favor, llena ambos campos (nombre y calificación).';
        return;
    }

    const calificacion = Number(calificacionTexto);

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        mensajeError.textContent = 'Ingresa una calificación válida (entre 0 y 100).';
        return;
    }

    const nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(nuevoEstudiante);

    inputNombre.value = '';
    inputCalificacion.value = '';
    inputNombre.focus();

    totalRegistrados.textContent = `Estudiantes agregados: ${estudiantes.length}`;
}

function calcularResultados() {
    const mensajeError = document.getElementById('mensajeError');
    const txtPromedio = document.getElementById('promedio');
    const txtMasAlta = document.getElementById('masAlta');
    const txtMasBaja = document.getElementById('masBaja');

    mensajeError.textContent = '';

    if (estudiantes.length === 0) {
        mensajeError.textContent = 'Agrega al menos un estudiante antes de calcular.';
        return;
    }

    const sumaTotal = estudiantes.reduce((acc, est) => acc + est.calificacion, 0);
    const promedio = sumaTotal / estudiantes.length;

    const calificaciones = estudiantes.map(est => est.calificacion);
    const maxCalificacion = Math.max(...calificaciones);
    const minCalificacion = Math.min(...calificaciones);

    const estudianteMax = estudiantes.find(est => est.calificacion === maxCalificacion);
    const estudianteMin = estudiantes.find(est => est.calificacion === minCalificacion);

    txtPromedio.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
    txtMasAlta.value = `${estudianteMax.nombre} (${maxCalificacion})`;
    txtMasBaja.value = `${estudianteMin.nombre} (${minCalificacion})`;
}