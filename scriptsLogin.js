document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formId');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputEmail = document.getElementById('emailInput');
        const inputPass = document.getElementById('passInput');

        const emailValue = inputEmail.value.trim();
        const passwordValue = inputPass.value.trim();
        if (emailValue === '') {
            alert('O email não pode estar vazio!!');
            return;
        }

        if (passwordValue.length < 8) {
            alert('A senha precisa ter pelo menos 8 caracteres!!');
            return;
        }

        window.location.href = 'index.html';
    });
});