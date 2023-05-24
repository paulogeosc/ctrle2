function validarFormulario() {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach((input) => {
    input.addEventListener('blur', () => {
      const label = input.previousElementSibling.innerHTML;
      if (input.value !== label) {
        input.value = '';
        input.classList.add('invalid');
        const alert = input.nextElementSibling;
        alert.style.display = 'block';
        alert.innerHTML = `Conteúdo inválido. O campo deve ter o mesmo valor que o seu label "${label}".`;
        input.focus();
      } else {
        input.classList.remove('invalid');
        const alert = input.nextElementSibling;
        alert.style.display = 'none';
      }
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const label = input.previousElementSibling.innerHTML;
        if (input.value !== label) {
          input.value = '';
          input.classList.add('invalid');
          const alert = input.nextElementSibling;
          alert.style.display = 'block';
          alert.innerHTML = `Conteúdo inválido. O campo deve ter o mesmo valor que o seu label "${label}".`;
          input.focus();
        } else {
          input.classList.remove('invalid');
          const alert = input.nextElementSibling;
          alert.style.display = 'none';
        }
      }
    });
  });
}
