// Selecionando o formulário pelo ID
const form = document.getElementById("formContato");
const status = document.getElementById("statusEnvio");

// Ouvinte de evento para quando o formulário for enviado
form.addEventListener("submit", function(event) {
    
    // Impede o envio real do formulário
    event.preventDefault();

    // Pegando valores digitados
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Validação simples
    if (nome === "" || email === "" || mensagem === "") {
        status.textContent = "Por favor, preencha todos os campos antes de enviar.";
        status.style.color = "red";
    } else {
        status.textContent = "Mensagem enviada com sucesso! Obrigada pelo contato 😊";
        status.style.color = "green";

        // Limpar os campos
        form.reset();
    }
});
