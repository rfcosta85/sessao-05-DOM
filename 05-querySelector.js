const btnBuscar = document.querySelector('[data-acao="consultar"]');

btnBuscar.addEventListener("click", function() {
    
    const inputNIF = document.querySelector("#input-nif");
    
    const statusMsg = document.querySelector(".status-mensagem");
    
    const painel = document.querySelector("div#painel-detalhes");

    const nifValor = inputNIF.value.trim();

    if (nifValor.length !== 9 || isNaN(nifValor)) {
        statusMsg.textContent = "Erro: O NIF deve conter exatamente 9 dígitos numéricos.";
        statusMsg.className = "status-mensagem mensagem-alerta";
        painel.innerHTML = "";
        return;
    }

    statusMsg.textContent = "Utente localizado com sucesso!";
    statusMsg.className = "status-mensagem mensagem-sucesso";

    // Preenche os dados simulados no painel
    painel.innerHTML = `
        <div class="card-resultado">
            <h3>Dados do Titular</h3>
            <p><strong>Nome:</strong> João Silva</p>
            <p><strong>NIF:</strong> ${nifValor}</p>
            <p><strong>Carta de Condução:</strong> Ativa (12 Pontos)</p>
        </div>
    `;
});