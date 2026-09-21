function destacarPendentes() {
    const infracoesPendentes = document.getElementsByClassName("pendente");

    for (let i = 0; i < infracoesPendentes.length; i++) {
        infracoesPendentes[i].classList.add("destaque");
    }
}

function limparDestaques() {
    const todasInfracoes = document.getElementsByClassName("infracao");

    for (let i = 0; i < todasInfracoes.length; i++) {
        todasInfracoes[i].classList.remove("destaque");
    }
}