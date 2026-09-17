function convertir() {
  const entrada = document.getElementById('kilometros');
  const resultado = document.getElementById('resultado');
  const error = document.getElementById('mensajeError');
  const valor = entrada.value.trim();

  error.textContent = '';
  resultado.value = '';

  if (valor === '') {
    error.textContent = 'Ingresa un valor antes de convertir.';
    entrada.focus();
    return;
  }

  const kilometros = Number(valor);

  if (isNaN(kilometros)) {
    error.textContent = 'Ingresa solo un número válido.';
    entrada.focus();
    return;
  }

  const millas = kilometros * 0.621371; 
  resultado.value = millas.toFixed(5);
}

document.getElementById('kilometros').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') convertir();
});