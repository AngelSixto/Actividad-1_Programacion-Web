function verificar() {
  const entrada = document.getElementById('edad');
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

  const edad = Number(valor);

  if (isNaN(edad)) {
    error.textContent = 'Ingresa solo un número válido.';
    entrada.focus();
    return;
  }

   if(edad>=18){
    resultado.value = 'Puedes Votar';
   }else if (edad<18&&edad>=0){
    resultado.value = 'No puedes votar'
   }else{
        error.textContent = 'No se permiten valores negativos.';
        entrada.focus();
        return;
   }


}

document.getElementById('edad').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') convertir();
});