document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        // Validación de campos
        if (nameField.value.trim() === '' || emailField.value.trim() === '' || messageField.value.trim() === '') {
            event.preventDefault();
            alert('Por favor, complete todos los campos.');
        } else {
            alert('¡Mensaje enviado con éxito!');
        }
    });
});
