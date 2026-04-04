/*
  ============================================================
  EXERCÍCIO 01 — Vitrine de Produtos JBS
  Arquivo: exercicio.js  (versão do ALUNO)
  Nível: ⭐ Iniciante
  ============================================================

  SITUAÇÃO-PROBLEMA:
  ───────────────────
  O gerente de e-commerce da JBS abriu um chamado no sistema:

    "Preciso de um script que inspecione a vitrine e me responda
     no Console:
     1. Qual é o título atual da vitrine?
     2. Quantos produtos estão disponíveis?
     3. Quantos produtos estão indisponíveis?
     4. Qual é o nome do PRIMEIRO produto da lista?
     5. Qual é o nome do ÚLTIMO produto da lista?
     6. Quais produtos são da categoria 'bovino'?
        (exibir cada nome em uma linha separada)
     7. Atualizar o rodapé da página com o total de produtos."

  COMO RESOLVER:
  ───────────────
  - Leia as instruções acima de cada tarefa.
  - Preencha os seletores e complete o código.
  - Abra o index.html no navegador → F12 → Console.
  - Verifique se a saída bate com o esperado em cada tarefa.

  DICA GERAL:
  ────────────
  Antes de escrever qualquer seletor, inspecione o HTML com F12.
  Observe os ids, classes e atributos data-* dos elementos.
  ============================================================
*/

'use strict';

console.log('╔══════════════════════════════════════════╗');
console.log('║  EXERCÍCIO 01 — Vitrine JBS              ║');
console.log('╚══════════════════════════════════════════╝');


// ─────────────────────────────────────────────────────────
// TAREFA 1
// Selecione o elemento com id="titulo-vitrine" e exiba
// seu conteúdo de texto no console.
// Método sugerido: getElementById
// Esperado no console: "Linha Premium JBS"
// ─────────────────────────────────────────────────────────
const titulo = document.getElementById("titulo-vitrine");
console.log('1. Título da vitrine:', titulo.textContent.trim());


// ─────────────────────────────────────────────────────────
// TAREFA 2 e 3
// Selecione TODOS os produtos disponíveis (classe "disponivel")
// e TODOS os indisponíveis (classe "indisponivel").
// Exiba a contagem de cada um.
// Esperado: 4 disponíveis · 2 indisponíveis
// ─────────────────────────────────────────────────────────
const disponiveis   = document.querySelectorAll(".disponivel");
const indisponiveis = document.querySelectorAll(".indisponivel");
console.log('2. Disponíveis:', disponiveis.length);
console.log('3. Indisponíveis:', indisponiveis.length);


// ─────────────────────────────────────────────────────────
// TAREFA 4 e 5
// Selecione o PRIMEIRO e o ÚLTIMO produto (article.produto)
// e exiba o nome de cada um (h2.nome-produto dentro deles).
// Dica: primeiro = article.produto:first-child
//        último  = article.produto:last-child
// Esperado: "Picanha JBS Friboi" e "Bacon Defumado Swift"
// ─────────────────────────────────────────────────────────
const primeiroProduto = document.querySelector("article.produto:first-child");
const ultimoProduto   = document.querySelector("article.produto:last-child");

// Dica: depois de selecionar o article, use .querySelector('.nome-produto')
// para pegar o h2 dentro dele e então .textContent.trim()
console.log('4. Primeiro produto:', primeiroProduto.querySelector(".nome-produto").textContent);
console.log('5. Último produto:',  ultimoProduto.querySelector(".nome-produto").textContent);


// ─────────────────────────────────────────────────────────
// TAREFA 6
// Selecione todos os produtos com data-categoria="bovino"
// e exiba o nome de cada um em uma linha separada.
// Dica: seletor de atributo → [data-categoria='bovino']
// Esperado: Picanha JBS Friboi / Contrafilé Friboi / Ancho Premium Friboi
// ─────────────────────────────────────────────────────────
const bovinos = document.querySelectorAll("[data-categoria='bovino']");

console.log('6. Produtos bovinos:');
// Percorra a NodeList e exiba o nome de cada produto
// Dica: use .forEach() e dentro dele: item.querySelector('.nome-produto').textContent.trim()
bovinos.forEach((card,index)=>{
  console.log((index+1)+" - "+card.querySelector(".nome-produto").textContent.trim())
})


// ─────────────────────────────────────────────────────────
// TAREFA 7
// Selecione o elemento com id="contador-resultado"
// e substitua seu texto pelo total de produtos encontrados.
// Formato esperado na página: "Total: 6 produtos · 4 disponíveis · 2 indisponíveis"
// Dica: use .textContent = '...' para alterar o texto
// ─────────────────────────────────────────────────────────
const contador = document.getElementById("contador-resultado");
/* complete aqui — atribua o novo texto ao .textContent do contador */
contador.textContent = document.querySelectorAll(".produto").length
console.log(contador.textContent)
