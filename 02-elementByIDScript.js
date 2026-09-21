const titulo = document.getElementById("titulo-principal");
titulo.style.color = "#2c3e50";
titulo.style.fontFamily = "Arial, sans-serif";

const campoNome = document.getElementById("campo-nome");
const btnConfirmar = document.getElementById("btn-confirmar");
const cartao = document.getElementById("cartao-usuario");

btnConfirmar.addEventListener("click", function() {    
    const nome = campoNome.value;

    if (nome === "") {
        alert("Por favor, introduza o seu nome!");
    } else {
        alert(`Bem-vindo(a) ao portal, ${nome}!`);
        cartao.style.backgroundColor = "#d4edda";
    }
});