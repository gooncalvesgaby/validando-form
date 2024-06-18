const form = document.querySelector("#form");
const validarNome = document.querySelector("#nome");
const validarNascimento = document.querySelector("#nascimento");
const validarCpf = document.querySelector("#cpf");
const validarEmail = document.querySelector("#email");
const validarSenha = document.querySelector("#senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(validarNome.value === "") {
        alert("Por favor preencha o campo com o seu nome");
        return;
    }

    if(validarNascimento.value === "") {
        alert("Por favor selecione sua data de nascimento");
        return;
    }

    if (validarCpf.value === "") {
        alert("Por favor informe o seu CPF");
        return;
    }

    if(validarEmail.value === "" || !emailValido(validarEmail.value)) {
        alert("Por favor informe o seu email");
        return;
    }

    if(validarSenha.value === "" || !validandoSenha(senha.value, 10)) {
        alert("Por favor digite sua senha de min 10 digitos");
        return;
    }
    form.submit()
});

function emailValido(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
    
    return false;
}

function validandoSenha (senha, minDigits) {
    if(senha.length >= minDigits) {
        return true
    }

    return false

}