// ═══════════════════════════════════════════════════════════
//  ██████╗  █████╗ ███████╗██╗  ██╗
//  ██╔══██╗██╔══██╗██╔════╝██║  ██║
//  ██║  ██║███████║███████╗███████║
//  ██║  ██║██╔══██║╚════██║██╔══██║
//  ██████╔╝██║  ██║███████║██║  ██║
//  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
//  Exercício 04 — ⭐⭐⭐⭐ Avançado — Dashboard J&F KPIs
//  Aula 14: dataset numérico, cálculos, innerHTML, setAttribute
// ═══════════════════════════════════════════════════════════
'use strict';

// ── TAREFA 01 ─────────────────────────────────────────────────
// Selecione todos os .kpi-card e para cada um:
// - Leia data-valor e data-unidade via dataset
// - Formate e exiba no .kpi-valor com textContent
// BRL: use toLocaleString  |  % e pessoas: exibir direto + unidade
const kpis = PREENCHA_AQUI;
kpis.forEach(kpi => {
  const valor   = Number(kpi.dataset.PREENCHA_AQUI);
  const unidade = kpi.dataset.PREENCHA_AQUI;
  const valorEl = kpi.querySelector(".kpi-valor");

  if (unidade === "BRL") {
    valorEl.textContent = valor.PREENCHA_AQUI('pt-BR', { style:'currency', currency:'BRL' });
  } else {
    valorEl.textContent = valor.toLocaleString('pt-BR') + " " + unidade;
  }
});

// ── TAREFA 02 ─────────────────────────────────────────────────
// Para cada kpi, exiba a meta no .kpi-meta com textContent.
// Formate igual ao valor (BRL ou + unidade).
kpis.forEach(kpi => {
  const meta    = Number(kpi.dataset.meta);
  const unidade = kpi.dataset.unidade;
  const metaEl  = kpi.querySelector(".kpi-meta");

  let metaFormatada;
  if (unidade === "BRL") {
    metaFormatada = PREENCHA_AQUI;
  } else {
    metaFormatada = meta.toLocaleString('pt-BR') + " " + unidade;
  }
  metaEl.textContent = "Meta: " + PREENCHA_AQUI;
});

// ── TAREFA 03 ─────────────────────────────────────────────────
// Para cada kpi, exiba a variação no .kpi-variacao.
// Positivo: "▲ +X%" | Negativo: "▼ X%"
// Sincronize data-positivo no .kpi-variacao com setAttribute.
kpis.forEach(kpi => {
  const variacao   = kpi.dataset.variacao;   // ex: "8.3" ou "-2.4"
  const positivo   = kpi.dataset.positivo;   // "true" ou "false"
  const variacaoEl = kpi.querySelector(".kpi-variacao");

  const seta   = positivo === "true" ? "▲" : "▼";
  const sinal  = positivo === "true" ? PREENCHA_AQUI : "";
  variacaoEl.textContent = `${seta} ${sinal}${variacao}% vs mês anterior`;
  variacaoEl.PREENCHA_AQUI("data-positivo", positivo);
});

// ── TAREFA 04 ─────────────────────────────────────────────────
// Para cada kpi, calcule o % de atingimento da meta (valor/meta*100).
// Use setAttribute para definir a largura do .kpi-progress como "XX%".
// dica: progressEl.setAttribute("style", `width: ${pct}%`)
kpis.forEach(kpi => {
  const valor      = Number(kpi.dataset.valor);
  const meta       = Number(kpi.dataset.meta);
  const pct        = Math.min(PREENCHA_AQUI, 100).toFixed(1); // máximo 100%
  const progressEl = kpi.querySelector(".kpi-progress");
  progressEl.setAttribute("style", PREENCHA_AQUI);
});

// ── TAREFA 05 ─────────────────────────────────────────────────
// Atualize #ultima-atualizacao com textContent usando a data atual.
// dica: new Date().toLocaleString('pt-BR')
document.getElementById("ultima-atualizacao").textContent =
  "Última atualização: " + PREENCHA_AQUI;

// ── TAREFA 06 ─────────────────────────────────────────────────
// Gere um resumo com innerHTML no footer #dash-resumo.
// Mostre: quantos KPIs atingiram a meta (valor >= meta).
const kpisAtingidos = Array.from(kpis).filter(k =>
  Number(k.dataset.valor) >= Number(k.dataset.meta)
).length;
document.getElementById("dash-resumo").innerHTML =
  `Dashboard J&F · <strong>${kpis.length}</strong> KPIs monitorados · ` +
  `<strong>${PREENCHA_AQUI}</strong> atingiram a meta este mês`;

console.log("═══ Verificação Ex04 ═══");
console.log("KPI receita valor:", document.querySelector("#kpi-receita .kpi-valor").textContent);
console.log("KPIs atingidos:", kpisAtingidos);
