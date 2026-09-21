// 1. Seleção dos Botões (Escutadores de Eventos)
const btnTitulo = document.querySelector('#btn-titulo');
const btnParagrafos = document.querySelector('#btn-paragrafos');
const btnImagem = document.querySelector('#btn-imagem');
const btnAdicionar = document.querySelector('#btn-adicionar');
const btnRemover = document.querySelector('#btn-remover');

// ------------------------------------------------------------------
// 2. Funções de Manipulação do DOM
// ------------------------------------------------------------------

// Ação 1: Manipulando Texto e Estilo
btnTitulo.addEventListener('click', () => {
  const titulo = document.querySelector('#titulo-alvo');
  titulo.textContent = "🚀 Título Alterado pelo JavaScript!";
  titulo.style.color = "#e84393";
});

// Ação 2: Manipulando múltiplos elementos com querySelectorAll + classList
btnParagrafos.addEventListener('click', () => {
  const paragrafos = document.querySelectorAll('.paragrafos .texto');
  paragrafos.forEach(p => {
    p.classList.toggle('destaque');
  });
});

// Ação 3: Manipulando Atributos de Tags (src da imagem)
btnImagem.addEventListener('click', () => {
  const img = document.querySelector('#imagem-alvo');
  if (img.src.includes('Imagem+A')) {
    img.src = "https://via.placeholder.com/300x150/00b894/FFFFFF?text=Imagem+B";
  } else {
    img.src = "https://via.placeholder.com/300x150/0984e3/FFFFFF?text=Imagem+A";
  }
});

// Ação 4: Criando e inserindo novas tags no DOM
btnAdicionar.addEventListener('click', () => {
  const container = document.querySelector('#container-dinamico');
  
  // Criar o elemento
  const novoCard = document.createElement('div');
  
  // Configurar o elemento
  novoCard.className = 'card-dinamico';
  novoCard.textContent = `✨ Item criado em ${new Date().toLocaleTimeString()}`;

  // Inserir no DOM
  container.appendChild(novoCard);
});

// Ação 5: Removendo elementos do DOM
btnRemover.addEventListener('click', () => {
  const container = document.querySelector('#container-dinamico');
  const ultimosCards = container.querySelectorAll('.card-dinamico');
  
  if (ultimosCards.length > 0) {
    // Remove o último card criado
    ultimosCards[ultimosCards.length - 1].remove();
  } else {
    alert("Não há mais itens criados para remover!");
  }
});