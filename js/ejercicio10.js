function convertir() {
  const entrada = document.getElementById('celsius');
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

  const celsius = Number(valor);

  if (isNaN(celsius)) {
    error.textContent = 'Ingresa solo un número válido.';
    entrada.focus();
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  resultado.value = fahrenheit.toFixed(1) + '°F';
}

document.getElementById('celsius').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') convertir();
});