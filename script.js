document.getElementById('photographer-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Verificar se o formulário é válido
    if (!this.checkValidity()) {
        document.getElementById('form-message').textContent = 'Por favor, preencha todos os campos obrigatórios.';
        document.getElementById('form-message').style.color = 'red';
        return;
    }

    const formData = new FormData(this);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('your-server-endpoint', { // Substitua com o endpoint do seu servidor
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('form-message').textContent = 'Cadastro realizado com sucesso!';
        document.getElementById('form-message').style.color = 'green';
        document.getElementById('photographer-form').reset();
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('form-message').textContent = 'Ocorreu um erro. Tente novamente.';
        document.getElementById('form-message').style.color = 'red';
    });
});
