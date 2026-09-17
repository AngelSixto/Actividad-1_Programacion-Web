const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : 'Error: División por cero');

const calcularOperacion = (tipoOperacion) => {
    const val1 = document.getElementById('numero1').value.trim();
    const val2 = document.getElementById('numero2').value.trim();
    const txtResultado = document.getElementById('resultado');

    txtResultado.value = '';

    if (val1 === '' || val2 === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, ingresa ambos números para realizar la operación.',
            confirmColor: '#3498db'
        });
        return;
    }

    const n1 = Number(val1);
    const n2 = Number(val2);

    if (isNaN(n1) || isNaN(n2)) {
        Swal.fire({
            icon: 'error',
            title: 'Entrada inválida',
            text: 'Por favor, ingresa únicamente números válidos.',
            confirmColor: '#e74c3c'
        });
        return;
    }

    let res;

    switch (tipoOperacion) {
        case 'suma':
            res = sumar(n1, n2);
            break;
        case 'resta':
            res = restar(n1, n2);
            break;
        case 'multiplicacion':
            res = multiplicar(n1, n2);
            break;
        case 'division':
            res = dividir(n1, n2);
            if (res === 'Error: División por cero') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error matemático',
                    text: 'No es posible dividir entre cero.',
                    confirmColor: '#e74c3c'
                });
                txtResultado.value = res;
                return;
            }
            break;
    }

    txtResultado.value = typeof res === 'number' && !Number.isInteger(res) ? res.toFixed(2) : res;
};