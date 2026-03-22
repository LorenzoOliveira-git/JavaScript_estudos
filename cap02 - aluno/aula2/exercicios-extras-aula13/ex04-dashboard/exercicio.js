/*
  ============================================================
  EXERCÍCIO 04 — Dashboard de Indicadores J&F
  Arquivo: exercicio.js  (versão do ALUNO)
  Nível: ⭐⭐⭐⭐ Avançado
  ============================================================

  SITUAÇÃO-PROBLEMA:
  ───────────────────
  O analista da diretoria J&F precisa que o script responda:

  1. Quantas empresas estão ACIMA da meta? (tendencia-alta)
  2. Quantas estão ABAIXO? (tendencia-queda)
  3. Qual empresa tem o MAIOR valor (data-valor)?
  4. Qual empresa tem o MENOR valor?
  5. Soma total de todos os valores (em milhões)
  6. Média dos valores
  7. Quais empresas de "vendas" (data-area='vendas') estão acima da meta?
  8. Para cada card, calcule o % atingido da meta e exiba no console:
     "JBS Vendas: 109.6% da meta" (valor / meta * 100)
  9. Preencher o #analise-final com os dados calculados

  CONCEITOS PRATICADOS:
  ──────────────────────
  - Array.from + map para extrair valores numéricos do DOM
  - Math.max / Math.min com spread operator sobre array de números
  - reduce para soma acumulada
  - Seletores combinados (classe + atributo)
  - Formatação de números com toFixed(1)
  ============================================================
*/

'use strict';

console.log('╔══════════════════════════════════════════╗');
console.log('║  EXERCÍCIO 04 — Dashboard J&F            ║');
console.log('╚══════════════════════════════════════════╝');

// Todos os cards
const cards = document.querySelectorAll('.kpi-card');


// ─────────────────────────────────────────────────────────
// TAREFA 1 e 2 — Acima e abaixo da meta
// ─────────────────────────────────────────────────────────
const acimaMeta  = Array.from(cards).filter(card=>{
  return parseFloat(card.dataset.valor) > parseFloat(card.dataset.meta)
}) ;
const abaixoMeta = Array.from(cards).filter(card=>{
  return parseFloat(card.dataset.valor) < parseFloat(card.dataset.meta)
});
console.log('1. Acima da meta:', acimaMeta.length);
console.log('2. Abaixo da meta:',abaixoMeta.length);


// ─────────────────────────────────────────────────────────
// TAREFA 3 e 4 — Maior e menor valor
// Passo a passo:
//   a) Extraia um array de números com Array.from + map:
//      Array.from(cards).map(c => parseFloat(c.dataset.valor))
//   b) Use Math.max(...valores) e Math.min(...valores)
//   c) Encontre o card correspondente com .find()
// ─────────────────────────────────────────────────────────
const valores = Array.from(cards).map(c => parseFloat(c.dataset.valor));
console.log(valores)

const maiorValor = Math.max.apply(null,valores);
const menorValor = Math.min.apply(null,valores);


const cardMaior = Array.from(cards).find(c => parseFloat(c.dataset.valor) === maiorValor);
const cardMenor = Array.from(cards).find(c => parseFloat(c.dataset.valor) === menorValor);

console.log('3. Maior valor: ', cardMaior.querySelector('.kpi-empresa').textContent, maiorValor);
console.log('4. Menor valor: ', cardMenor.querySelector('.kpi-empresa').textContent, menorValor);


// ─────────────────────────────────────────────────────────
// TAREFA 5 e 6 — Soma e média
// Use reduce para somar o array valores, depois divida pelo total
// ─────────────────────────────────────────────────────────
const soma   = valores.reduce((acc, v) => acc + v, 0);
const media  = soma / cards.length;

console.log('5. Soma total:', soma.toFixed(1), 'mi');
console.log('6. Média:', media.toFixed(1), 'mi');


// ─────────────────────────────────────────────────────────
// TAREFA 7 — Empresas de vendas acima da meta
// Seletor combinado: '.tendencia-alta[data-area="vendas"]'
// Esperado: JBS, Vigor
// ─────────────────────────────────────────────────────────
const vendasAcima = Array.from(document.querySelectorAll(".kpi-card.tendencia-alta[data-area='vendas']")).filter(obj => {
  if(obj.dataset.valor > obj.dataset.meta){
    return obj
  }
});
console.log('7. Vendas acima da meta:');
vendasAcima.forEach((card,index)=>{
  console.log("- "+card.querySelector(".kpi-empresa").textContent)
})


// ─────────────────────────────────────────────────────────
// TAREFA 8 — % atingido da meta para cada empresa
// Para cada card: (data-valor / data-meta * 100).toFixed(1) + '%'
// ─────────────────────────────────────────────────────────
console.log('8. % atingido por empresa:');
cards.forEach(card => {
  const empresa = card.querySelector('.kpi-empresa').textContent;
  const area    = card.dataset.area;
  const pct     = (parseFloat(card.dataset.valor) /
                   parseFloat(card.dataset.meta) * 100).toFixed(1);
  console.log(`   ${empresa} ${area}: ${pct}% da meta`);
});


// ─────────────────────────────────────────────────────────
// TAREFA 9 — Análise final
// ─────────────────────────────────────────────────────────
const analise = document.getElementById('analise-final');
/* analise.textContent = `...` */
