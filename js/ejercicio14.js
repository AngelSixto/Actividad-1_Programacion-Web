function procesarNumeros() {
    const entrada = document.getElementById('numerosInput');
    const txtMayor = document.getElementById('numMayor');
    const txtMenor = document.getElementById('numMenor');
    const txtPromedio = document.getElementById('promedio');
    const mensajeError = document.getElementById('mensajeError');

    mensajeError.textContent = '';
    txtMayor.value = '';
    txtMenor.value = '';
    txtPromedio.value = '';

    const valor = entrada.value.trim();

    if (valor === '') {
        mensajeError.textContent = 'Por favor, ingresa al menos un número.';
        entrada.focus();
        return;
    }

    const elementos = valor.split(',');
    const numeros = elementos.map(item => Number(item.trim()));

    const esValido = numeros.every(num => !isNaN(num) && num !== null && String(num) !== '');

    if (!esValido || numeros.length === 0) {
        mensajeError.textContent = 'Ingresa solo números válidos separados por comas.';
        entrada.focus();
        return;
    }

    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);
    
    const suma = numeros.reduce((acc, val) => acc + val, 0);
    const promedio = suma / numeros.length;

    txtMayor.value = mayor;
    txtMenor.value = menor;
    txtPromedio.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
}

document.getElementById('numerosInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        procesarNumeros();
    }
});