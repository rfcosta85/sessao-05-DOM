function processarAgendamento() {
    const radiosVeiculo = document.getElementsByName("tipoVeiculo");    
    const checkboxesServicos = document.getElementsByName("servicos");

    let veiculoSelecionado = "";
    let servicosEscolhidos = [];

    
    for (let i = 0; i < radiosVeiculo.length; i++) {
        if (radiosVeiculo[i].checked) {
            veiculoSelecionado = radiosVeiculo[i].value;
            break;
        }
    }
    
    for (let i = 0; i < checkboxesServicos.length; i++) {
        if (checkboxesServicos[i].checked) {
            servicosEscolhidos.push(checkboxesServicos[i].value);
        }
    }

    const divResultado = document.getElementById("resultado");

    if (!veiculoSelecionado) {
        divResultado.innerHTML = 
        "<span style='color: red;'>Por favor, selecione um tipo de veículo!</span>";
        return;
    }

    let mensagem = `<p style='color: green;'>Veículo selecionado: ${veiculoSelecionado}</p>`;

    if (servicosEscolhidos.length > 0) {
        mensagem += `<p>Serviços extra: ${servicosEscolhidos.join(", ")}</p>`;
    } else {
        mensagem += `<p>Sem serviços adicionais selecionados.</p>`;
    }

    divResultado.innerHTML = mensagem;
}

function limparSelecao() {
    const radios = document.getElementsByName("tipoVeiculo");
    const checkboxes = document.getElementsByName("servicos");

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    document.getElementById("resultado").innerHTML = "";
}