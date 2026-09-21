// Configurações base em pixels
const TAMANHO_INICIAL = 16;
let tamanhoAtual = TAMANHO_INICIAL;

const TAMANHO_MAXIMO = 32;
const TAMANHO_MINIMO = 12;
const PASSO = 4;

let estaDestacado = false;

function aplicarTamanhoFonte() {
    const paragrafos = document.getElementsByTagName("p");

    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.fontSize = `${tamanhoAtual}px`;
    }
}

function aumentarTexto() {
    if (tamanhoAtual + PASSO <= TAMANHO_MAXIMO) {
        tamanhoAtual += PASSO;
        aplicarTamanhoFonte();
    } else {
        alert("Tamanho máximo atingido (32px)!");
    }
}

function diminuirTexto() {
    if (tamanhoAtual - PASSO >= TAMANHO_MINIMO) {
        tamanhoAtual -= PASSO;
        aplicarTamanhoFonte();
    } else {
        alert("Tamanho mínimo atingido (12px)!");
    }
}

function resetarTamanho() {
    tamanhoAtual = TAMANHO_INICIAL;
    aplicarTamanhoFonte();
}

function alternarDestaque() {
    const paragrafos = document.getElementsByTagName("p");
    const btnDestaque = document.getElementById("btn-destaque");

    estaDestacado = !estaDestacado;

    for (let i = 0; i < paragrafos.length; i++) {
        if (estaDestacado) {
            paragrafos[i].style.backgroundColor = "#fff3cd";
            paragrafos[i].style.borderLeft = "4px solid #ffc107";
            paragrafos[i].style.padding = "8px";
        } else {
            paragrafos[i].style.backgroundColor = "transparent";
            paragrafos[i].style.borderLeft = "none";
            paragrafos[i].style.padding = "0px";
        }
    }

    btnDestaque.textContent = estaDestacado ? "Remover Destaque" : "Destacar Texto";
}