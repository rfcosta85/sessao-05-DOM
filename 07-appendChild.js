const btnAdicionar = document.querySelector("#btn-adicionar");
const listaInfracoes = document.querySelector("#lista-infracoes");

btnAdicionar.addEventListener("click", function() {
    
    const novaInfracao = document.createElement("li");

    novaInfracao.textContent = "Estacionamento proibido - €60.00";
    novaInfracao.className = "infracao-item";

    listaInfracoes.appendChild(novaInfracao);
});