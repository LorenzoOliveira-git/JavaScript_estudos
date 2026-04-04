// ═══════════════════════════════════════════════════════════
//   ██████╗ ██████╗ ██╗      █████╗ ██████╗ ███████╗
//  ██╔════╝██╔═══██╗██║     ██╔══██╗██╔══██╗██╔════╝
//  ██║     ██║   ██║██║     ███████║██████╔╝███████╗
//  ██║     ██║   ██║██║     ██╔══██║██╔══██╗╚════██║
//  ╚██████╗╚██████╔╝███████╗██║  ██║██████╔╝███████║
//   ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
//  Exercício 03 — ⭐⭐⭐ Intermediário — RH Germinare
//  Aula 14: dataset cruzado, innerHTML, contagens e relatório
// ═══════════════════════════════════════════════════════════
'use strict';

const CARGOS = { junior: "Dev Júnior", pleno: "Dev Pleno", senior: "Dev Sênior" };
const AREAS  = { tecnologia: "Tecnologia", design: "Design", educacao: "Educação" };

// ── TAREFA 01 ─────────────────────────────────────────────────
// Selecione todos os .colab-card e atualize .colab-cargo e .colab-area
// usando dataset.nivel + dataset.area com os objetos CARGOS e AREAS acima.
// dica: CARGOS[card.dataset.nivel]
const cards = document.querySelectorAll(".colab-card");
cards.forEach(card => {
  const cargoEl = card.querySelector(".colab-cargo");
  const areaEl  = card.querySelector(".colab-area");
  cargoEl.textContent = CARGOS[card.dataset.nivel];
  areaEl.textContent  = AREAS[card.dataset.area];
});

// ── TAREFA 02 ─────────────────────────────────────────────────
// Para cada card, atualize .colab-salario com o valor de data-salario.
// Formatar: "R$ 8.500,00" — use Number(x).toLocaleString('pt-BR', {...})
// dica: Number(card.dataset.salario).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
cards.forEach(card => {
  const salarioEl = card.querySelector(".colab-salario");
  salarioEl.textContent = "R$ "+Number(card.dataset.salario).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
});

// ── TAREFA 03 ─────────────────────────────────────────────────
// Para cada card, atualize .colab-status baseado em dataset.ativo.
// Use setAttribute para sincronizar o data-ativo do .colab-status com o do card.
// Ativo: textContent="Ativo" | Inativo: textContent="Inativo"
cards.forEach(card => {
  const statusEl = card.querySelector(".colab-status");
  const ativo    = card.dataset.ativo;
  statusEl.textContent = ativo === "true" ? "Ativo" : "Inativo";
  statusEl.setAttribute("data-ativo", ativo);
});

// ── TAREFA 04 ─────────────────────────────────────────────────
// Calcule e exiba nos stats: total, ativos, número de áreas únicas.
// dica para áreas únicas: new Set(Array.from(cards).map(c => c.dataset.area)).size
const total  = cards.length;
const ativos = Array.from(cards).filter(c => c.dataset.ativo === "true").length;
const areas  = new Set(Array.from(cards).map(c=> c.dataset.area)).size;
document.getElementById("stat-total").textContent  = total;
document.getElementById("stat-ativos").textContent = ativos;
document.getElementById("stat-areas").textContent  = areas;

// ── TAREFA 05 ─────────────────────────────────────────────────
// Calcule a média salarial dos colaboradores ATIVOS.
// Use innerHTML para exibir o relatório no #relatorio-rh com HTML formatado.
// ✅ Seguro: todos os dados são internos (dataset numérico do script)
const salarios = Array.from(cards)
  .filter(c => c.dataset.ativo === "true")
  .map(c => parseFloat(c.dataset.salario));
const mediaSalarial = salarios.reduce((s, v) => s + v, 0) / salarios.length;
const mediaBRL = mediaSalarial.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
document.getElementById("relatorio-rh").innerHTML =
  `RH Germinare · Total: <strong>${total}</strong> · ` +
  `Ativos: <strong>${ativos}</strong> · ` +
  `Áreas: <strong>${areas}</strong> · ` +
  `Média salarial (ativos): <strong>${mediaBRL}</strong>`;

console.log("═══ Verificação Ex03 ═══");
console.log("Card germ-001 cargo:", document.querySelector("[data-id='germ-001'] .colab-cargo").textContent);
console.log("Stat total:", document.getElementById("stat-total").textContent);
