//Modo Claro/Escuro
const botaoTema = document.getElementById("botaoModo");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    botaoTema.textContent = "Modo Claro";
  } else {
    botaoTema.textContent = "Modo Escuro";
  }
});

//Validação do formulário
document.addEventListener(function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "") {
            event.preventDefault();
            alert("Por favor, preencha o nome e o e-mail.");
        } else {
            alert("Formulário enviado com sucesso!");
        }
    });
});