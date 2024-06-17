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

    if(validarEmail.value === "") {
        alert("Por favor informe o seu email");
        return;
    }

    if(validarSenha.value === "") {
        alert("Por favor digite sua senha");
        return;
    }
    form.submit()
})