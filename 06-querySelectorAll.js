const cardsServicos = document.querySelectorAll(".servico-card");
const checkboxes = document.querySelectorAll(".check-servico");

cardsServicos.forEach((card) => {
    card.addEventListener("click", function(event) {
        const checkbox = card.querySelector(".check-servico");
        
        if (event.target !== checkbox) {
            checkbox.checked = !checkbox.checked;
        }

        card.classList.toggle("selecionado", checkbox.checked);

        calcularTotal();
    });
});

function calcularTotal() {
    let total = 0;

    const cardsSelecionados = document.querySelectorAll(".servico-card.selecionado");

    cardsSelecionados.forEach((card) => {
        const preco = parseFloat(card.dataset.preco);
        total += preco;
    });

    document.querySelector("#valor-total").textContent = `€${total.toFixed(2)}`;
}

document.querySelector("#btn-selecionar-todos").addEventListener("click", () => {
    checkboxes.forEach((check, index) => {
        check.checked = true;
        cardsServicos[index].classList.add("selecionado");
    });
    calcularTotal();
});

document.querySelector("#btn-limpar").addEventListener("click", () => {
    checkboxes.forEach((check, index) => {
        check.checked = false;
        cardsServicos[index].classList.remove("selecionado");
    });
    calcularTotal();
});