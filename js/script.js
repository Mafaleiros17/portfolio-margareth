/* ================================================================
   SCRIPT DE VALIDAÇÃO DO FORMULÁRIO DE CONTATO
   Este arquivo controla o envio do formulário, verifica os campos
   e exibe uma mensagem para o usuário.
   Tudo foi escrito de forma simples para facilitar o entendimento.
================================================================ */

/* Selecionando o formulário pelo ID */
const form = document.getElementById("formContato");

/* Selecionando o parágrafo onde exibiremos a mensagem de status */
const status = document.getElementById("statusEnvio");

/* 
   Adiciona um "ouvinte" para o evento de envio do formulário.
   Quando o botão Enviar é clicado, esta função é executada.
*/
form.addEventListener("submit", function(event) {

    /* Impede que o formulário recarregue a página ao enviar */
    event.preventDefault();

    /* Pegando os valores digitados pelo usuário */
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    /* 
       VALIDAÇÃO SIMPLES:
       Verifica se algum campo está vazio.
       Caso esteja, exibimos uma mensagem de erro.
    */
    if (nome === "" || email === "" || mensagem === "") {

        status.textContent = "Por favor, preencha todos os campos antes de enviar.";
        status.style.color = "red";

    } else {

        /* 
           Se todos os campos estiverem preenchidos,
           mostramos uma mensagem de sucesso.
        */
        status.textContent = "Mensagem enviada com sucesso! Obrigada pelo contato 😊";
        status.style.color = "green";

        /* 
           Depois da mensagem de sucesso,
           limpamos todos os campos do formulário.
        */
        form.reset();
    }
});
