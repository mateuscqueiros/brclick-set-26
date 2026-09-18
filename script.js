// Guarda na variável "botao" o botão que tem o id "botao-alternar"
const botao = document.getElementById('botao-alternar');

// Guarda na variável "secao" a seção que tem o id "secao-destaques"
const secao = document.getElementById('secao-destaques');

// Fica "escutando" cliques no botão; quando clicar, executa a função abaixo
botao.addEventListener('click', function () {
  // Alterna a classe "escondido" na seção: se ela não tem, adiciona; se já tem, remove
  secao.classList.toggle('escondido');
});
