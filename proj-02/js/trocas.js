const login = document.getElementById('irLogin');
const cadastro = document.getElementById('irCadastro');
const telaLogin = document.querySelector('.container-login');
const telaCadastro = document.querySelector('.container-cadastro');

login.addEventListener('click', () => {
    telaLogin.style.display = 'block';
    telaCadastro.style.display = 'none';
});

cadastro.addEventListener('click', () => {
    telaLogin.style.display = 'none';
    telaCadastro.style.display = 'block';
});
