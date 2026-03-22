/*
  ============================================================
  EXERCÍCIO 02 — Cardápio Digital Seara
  Arquivo: exercicio.js  (versão do ALUNO)
  Nível: ⭐⭐ Básico
  ============================================================

  SITUAÇÃO-PROBLEMA:
  ───────────────────
  O time de produto da Seara precisa de um script que analise
  o cardápio digital e gere um resumo automático com:

  1. Total de itens no cardápio (todos os li.item-cardapio)
  2. Quantos itens estão em promoção
  3. Lista completa dos nomes dos itens em promoção
  4. Quantos itens existem na categoria "aves" (data-tipo="aves")
  5. O nome do SEGUNDO item da seção de aves (:nth-child)
  6. O item com MENOR preço entre os embutidos
     (Dica: use querySelectorAll dentro da section[data-tipo='embutidos'])
  7. Atualizar o #resumo-cardapio com as informações acima

  NOVOS CONCEITOS DESTE EXERCÍCIO:
  ──────────────────────────────────
  - Buscar dentro de um elemento específico (não do document inteiro)
  - :nth-child(n) para selecionar pela posição
  - dataset para acessar data-* como objeto JavaScript
  - parseFloat para converter texto de preço em número
  ============================================================
*/

'use strict';

console.log('╔══════════════════════════════════════════╗');
console.log('║  EXERCÍCIO 02 — Cardápio Seara           ║');
console.log('╚══════════════════════════════════════════╝');


// ─────────────────────────────────────────────────────────
// TAREFA 1
// Total de itens no cardápio inteiro.
// Dica: todos os itens têm class="item-cardapio"
// Esperado: 8
// ─────────────────────────────────────────────────────────
const todosItens = document.querySelectorAll(".item-cardapio");
console.log('1. Total de itens: ',todosItens.length);


// ─────────────────────────────────────────────────────────
// TAREFA 2 e 3
// Selecione todos os itens em promoção (class="item-cardapio promocao")
// e liste os nomes de cada um no console.
// Lembre: .item-cardapio.promocao (sem espaço = ambas as classes)
// Esperado: 3 promoções
// ─────────────────────────────────────────────────────────
const promocoes = document.querySelectorAll(".item-cardapio.promocao");
console.log('2. Itens em promoção: ', promocoes.length);
console.log('3. Nomes em promoção:');
// Percorra promocoes com forEach e exiba o .nome-item de cada um
promocoes.forEach((card,index) =>{
  console.log(card.querySelector(".nome-item").textContent)
})


// ─────────────────────────────────────────────────────────
// TAREFA 4
// Quantos itens existem na seção com data-tipo="aves"?
// Dica 1: primeiro selecione a section[data-tipo='aves']
// Dica 2: depois chame .querySelectorAll('.item-cardapio')
//         NO PRÓPRIO ELEMENTO (não no document)
// Esperado: 3
// ─────────────────────────────────────────────────────────
const secaoAves = document.querySelector("[data-tipo='aves']")
const itensAves = secaoAves.querySelectorAll(".item-cardapio"); // busque dentro de secaoAves
console.log('4. Itens em Aves: ',itensAves.length);


// ─────────────────────────────────────────────────────────
// TAREFA 5
// Selecione o SEGUNDO item dentro da seção de aves.
// Dica: após ter secaoAves, use .querySelector('li:nth-child(2)')
// Esperado: "Coxa e Sobrecoxa Assada"
// ─────────────────────────────────────────────────────────
const segundoAve = secaoAves.querySelector("li:nth-child(2)") ; // busque dentro de secaoAves
console.log('5. Segundo item (Aves): ', segundoAve.querySelector(".nome-item").textContent);


// ─────────────────────────────────────────────────────────
// TAREFA 6
// Entre os itens da seção "embutidos", qual tem menor preço?
// Passo a passo:
//   a) Selecione a section[data-tipo='embutidos']
//   b) Selecione todos os .item-cardapio dentro dela
//   c) Converta para Array (Array.from)
//   d) Use .reduce() para encontrar o de menor data-preco
//      (use parseFloat(item.dataset.preco) para converter)
//   e) Exiba o nome do item mais barato
// Esperado: "Salsicha Seara Hot Dog" (R$ 7,50)
// ─────────────────────────────────────────────────────────
const secaoEmbutidos = document.querySelector("[data-tipo='embutidos']");
const itensEmbutidos = secaoEmbutidos.querySelectorAll(".item-cardapio");

// Complete o reduce abaixo:
const maisBarato = Array.from(itensEmbutidos).reduce((menor, atual) => {
  const precoAtual = parseFloat( atual.dataset.preco);
  const precoMenor = parseFloat( menor.dataset.preco);
  return precoAtual < precoMenor ? atual : menor;
});

console.log('6. Mais barato (embutidos):',
  maisBarato.querySelector('.nome-item').textContent.trim()
);


// ─────────────────────────────────────────────────────────
// TAREFA 7
// Atualize o #resumo-cardapio com um texto estruturado
// resumindo os dados encontrados nas tarefas anteriores.
// ─────────────────────────────────────────────────────────
const resumo = document.getElementById('resumo-cardapio');
resumo.textContent = `Após uma análise minuciosa do sitema, encontramos alguns KPIs que vão ajudar a loja tomar decisões mais certeiras. A captação desses dados foi feita em JavaScript em um exercícios proposto pelo professor Rodolfo. O resultado da pesquisa foi:\n\n- Total de itens no cardápio: ${todosItens.length}\n\n- Quantos itens estão em promoção: ${promocoes.length}\n\n- Lista completa dos nomes dos itens em promoção: `
// Fazer depois se der tempo


