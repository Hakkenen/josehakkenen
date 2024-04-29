// Simulação de armazenamento de usuários e senhas em uma base de dados
let users = [];

// Função para registrar novo usuário
function signUp(username, password) {
    users.push({ username, password });
}

// Função para autenticar usuário
function login(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

// Capturando o formulário de inscrição
const signupForm = document.getElementById('signup-form');

// Adicionando um evento de envio ao formulário de inscrição
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    signUp(newUsername, newPassword);
    alert('User created successfully!');
    this.reset();
});

// Capturando o formulário de login
const loginForm = document.getElementById('login-form');

// Adicionando um evento de envio ao formulário de login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = login(username, password);
    if (user) {
        alert(`Welcome, ${username}!`);
    } else {
        alert('Invalid username or password.');
    }
    this.reset();
});
