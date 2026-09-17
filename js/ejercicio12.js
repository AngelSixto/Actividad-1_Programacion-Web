function convertir() {
  const entrada = document.getElementById('pesos');
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

  const pesos = Number(valor);

  if (isNaN(pesos)) {
    error.textContent = 'Ingresa solo un número válido.';
    entrada.focus();
    return;
  }

  if (pesos < 0) {
        error.textContent = 'No se permiten valores negativos.';
        entrada.focus();
        return;
    }

  const dolares = pesos * 0.055;
  resultado.value = dolares.toFixed(2);
}

document.getElementById('pesos').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') convertir();
});