// ═══════════════════════════════════════════════════════════
//  ██╗     ██╗████████╗██████╗  ██████╗     ██╗██████╗ ███████╗
//  ██║     ██║╚══██╔══╝██╔══██╗██╔═══██╗    ██║██╔══██╗██╔════╝
//  ██║     ██║   ██║   ██████╔╝██║   ██║    ██║██████╔╝███████╗
//  ██║██   ██║   ██║   ██╔══██╗██║   ██║    ██║██╔══██╗╚════██║
//  ╚█████████║   ██║   ██║  ██║╚██████╔╝    ██║██████╔╝███████║
//   ╚════════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝     ╚═╝╚═════╝ ╚══════╝
//
//  Exercício 01 — ⭐ Iniciante — Vitrine JBS
//  Aula 14: textContent, getAttribute, dataset
// ═══════════════════════════════════════════════════════════
'use strict';

// ── TAREFA 01 ────────────────────────────────────────────────
// Selecione o card #prod-001 e use textContent para ler o nome do produto.
// Exiba no console: "Produto 1: Frango Inteiro Congelado"
// dica: document.getElementById(...)  →  .textContent
const card1 = PREENCHA_AQUI;
console.log("Produto 1:", PREENCHA_AQUI);

// ── TAREFA 02 ────────────────────────────────────────────────
// Leia o data-preco do #prod-001 com getAttribute e exiba no console.
// dica: card1.getAttribute("data-preco")
const preco1 = PREENCHA_AQUI;
console.log("Preço 1:", preco1); // → "29.90"

// ── TAREFA 03 ────────────────────────────────────────────────
// Use dataset para ler data-categoria do #prod-001 e exibir no console.
// dica: card1.dataset.categoria
console.log("Categoria 1:", PREENCHA_AQUI); // → "aves"

// ── TAREFA 04 ────────────────────────────────────────────────
// Selecione o .prod-preco dentro do #prod-001 e atualize com textContent.
// O preço deve exibir: "R$ 29,90"
// dica: card1.querySelector(".prod-preco")
const precoEl1 = PREENCHA_AQUI;
precoEl1.textContent = PREENCHA_AQUI;

// ── TAREFA 05 ────────────────────────────────────────────────
// Selecione o .prod-badge do #prod-001.
// Use setAttribute para adicionar data-status="disponivel" nele.
// dica: card1.querySelector(".prod-badge")  →  .setAttribute(...)
const badge1 = PREENCHA_AQUI;
badge1.setAttribute(PREENCHA_AQUI, PREENCHA_AQUI);
badge1.textContent = "Disponível";

// ── TAREFA 06 ────────────────────────────────────────────────
// Selecione TODOS os .card-produto com querySelectorAll.
// Use forEach para: ler data-preco via getAttribute e exibir no console.
// dica: document.querySelectorAll(".card-produto")
const todosCards = PREENCHA_AQUI;
todosCards.forEach(card => {
  const nome  = card.querySelector(".prod-nome").textContent;
  const preco = PREENCHA_AQUI;
  console.log(`${nome}: R$ ${preco}`);
});

// ── TAREFA 07 ────────────────────────────────────────────────
// Para CADA card, atualize o .prod-preco com o valor de data-preco.
// Formatar como "R$ X,XX" (substitua o ponto por vírgula).
// dica: preco.replace(".", ",")
todosCards.forEach(card => {
  const precoRaw = card.getAttribute("data-preco");
  const precoFormatado = "R$ " + PREENCHA_AQUI;
  card.querySelector(PREENCHA_AQUI).textContent = precoFormatado;
});

// ── TAREFA 08 ────────────────────────────────────────────────
// Para CADA card, atualize o .prod-badge com o status de disponibilidade.
// Se data-disponivel="true" → badge.textContent = "Disponível" + data-status="disponivel"
// Se data-disponivel="false" → badge.textContent = "Indisponível" + data-status="indisponivel"
// dica: card.dataset.disponivel === "true"
todosCards.forEach(card => {
  const badge      = card.querySelector(".prod-badge");
  const disponivel = card.dataset.PREENCHA_AQUI;
  if (PREENCHA_AQUI === "true") {
    badge.textContent = "Disponível";
    badge.setAttribute("data-status", "disponivel");
  } else {
    badge.textContent = PREENCHA_AQUI;
    badge.setAttribute("data-status", PREENCHA_AQUI);
  }
});

// ── TAREFA 09 ────────────────────────────────────────────────
// Atualize o #total-produtos com o número total de cards.
// Atualize o #total-disponiveis com quantos têm data-disponivel="true".
// dica: todosCards.length  |  filter com dataset.disponivel === "true"
const totalEl      = document.getElementById("total-produtos");
const disponiveisEl = document.getElementById("total-disponiveis");

const qtdTotal     = PREENCHA_AQUI;
const qtdDisponiveis = PREENCHA_AQUI; // dica: use Array.from(todosCards).filter(...)

totalEl.querySelector("strong").textContent     = qtdTotal;
disponiveisEl.querySelector("strong").textContent = qtdDisponiveis;

// ── VERIFICAÇÃO FINAL ─────────────────────────────────────────
console.log("═══ Verificação ═══");
console.log("Total de cards:", todosCards.length);
console.log("Prod-001 preço:", document.querySelector("#prod-001 .prod-preco").textContent);
console.log("Badge status 001:", document.querySelector("#prod-001 .prod-badge").dataset.status);
