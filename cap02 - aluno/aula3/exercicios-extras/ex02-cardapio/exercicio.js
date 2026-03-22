// ═══════════════════════════════════════════════════════════
//   ██████╗ █████╗ ██████╗ ██████╗  █████╗ ██████╗
//  ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗
//  ██║     ███████║██████╔╝██║  ██║███████║██████╔╝
//  ██║     ██╔══██║██╔══██╗██║  ██║██╔══██║██╔═══╝
//  ╚██████╗██║  ██║██║  ██║██████╔╝██║  ██║██║
//   ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝
//  Exercício 02 — ⭐⭐ Básico — Cardápio Seara
//  Aula 14: textContent, dataset, innerHTML em contexto real
// ═══════════════════════════════════════════════════════════
'use strict';

// ── TAREFA 01 ─────────────────────────────────────────────────
// Selecione TODOS os .item-cardapio e conte quantos existem.
// Exiba: "Total de itens no cardápio: 6"
const itens = PREENCHA_AQUI;
console.log("Total de itens no cardápio:", PREENCHA_AQUI);

// ── TAREFA 02 ─────────────────────────────────────────────────
// Para cada item, leia data-porcao e data-calorias via dataset.
// Atualize .item-porcao e .item-cal com textContent.
// Ex: "200g" e "280 kcal"
// dica: dataset.porcao  |  dataset.calorias
itens.forEach(item => {
  item.querySelector(".item-porcao").textContent = PREENCHA_AQUI;
  item.querySelector(".item-cal").textContent    = PREENCHA_AQUI + " kcal";
});

// ── TAREFA 03 ─────────────────────────────────────────────────
// Para cada item, leia data-preco via getAttribute.
// Atualize .item-preco com textContent formatado: "R$ X,XX"
itens.forEach(item => {
  const preco = item.PREENCHA_AQUI("data-preco");
  item.querySelector(".item-preco").textContent = "R$ " + preco.PREENCHA_AQUI(".", ",");
});

// ── TAREFA 04 ─────────────────────────────────────────────────
// Para cada item, verifique data-destaque via dataset.
// Se destaque="true" → .item-tag: textContent="⭐ Destaque" + setAttribute data-tipo="destaque"
// Se destaque="false" → .item-tag: textContent="Regular" + setAttribute data-tipo="regular"
itens.forEach(item => {
  const tag = item.querySelector(".item-tag");
  if (item.dataset.PREENCHA_AQUI === "true") {
    tag.textContent = "⭐ Destaque";
    tag.PREENCHA_AQUI("data-tipo", "destaque");
  } else {
    tag.textContent = PREENCHA_AQUI;
    tag.setAttribute(PREENCHA_AQUI, PREENCHA_AQUI);
  }
});

// ── TAREFA 05 ─────────────────────────────────────────────────
// Filtre os itens de categoria "frango" (dataset.categoria === "frango").
// Exiba no console: "Itens de frango: X"
const itensFrango = Array.from(itens).filter(item => item.dataset.PREENCHA_AQUI === PREENCHA_AQUI);
console.log("Itens de frango:", itensFrango.length);

// ── TAREFA 06 ─────────────────────────────────────────────────
// Calcule o preço médio de TODOS os itens.
// parseFloat(item.getAttribute("data-preco")) converte string para número.
// Exiba: "Preço médio: R$ XX,XX"
const precoTotal = Array.from(itens).reduce((soma, item) => {
  return soma + PREENCHA_AQUI(item.getAttribute("data-preco"));
}, 0);
const precoMedio = PREENCHA_AQUI;
console.log("Preço médio: R$", precoMedio.toFixed(2).replace(".", ","));

// ── TAREFA 07 ─────────────────────────────────────────────────
// Use innerHTML para atualizar o #resumo-cardapio com um resumo.
// O HTML deve conter: total de itens, quantos são destaque, preço médio.
// ✅ Seguro: os dados vêm de variáveis do seu script, não do usuário.
const qtdDestaque = Array.from(itens).filter(i => i.dataset.destaque === "true").length;
document.getElementById("resumo-cardapio").innerHTML =
  `<strong>${itens.length}</strong> itens · ` +
  `<strong>${qtdDestaque}</strong> em destaque · ` +
  `Preço médio: <strong>R$ ${PREENCHA_AQUI}</strong>`;

// ── VERIFICAÇÃO FINAL ──────────────────────────────────────────
console.log("═══ Verificação Exercício 02 ═══");
console.log("Item sea-001 porção:", document.querySelector("[data-id='sea-001'] .item-porcao").textContent);
console.log("Item sea-001 tag tipo:", document.querySelector("[data-id='sea-001'] .item-tag").dataset.tipo);
console.log("Resumo:", document.getElementById("resumo-cardapio").textContent.trim().substring(0,60));
