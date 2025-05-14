document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simple validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !subject || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Basic email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
      }

      // If validation passes
      alert('Mensagem enviada com sucesso! Obrigado pelo contato.');

      // Reset form
      form.reset();
    });
  }
});
