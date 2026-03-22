/*
  ============================================================
  EXERCÍCIO 03 — Lista de Colaboradores Germinare
  Arquivo: exercicio.js  (versão do ALUNO)
  Nível: ⭐⭐⭐ Intermediário
  ============================================================

  SITUAÇÃO-PROBLEMA:
  ───────────────────
  O RH da Germinare TECH quer um relatório de auditoria.
  Você deve responder no Console:

  1. Total de colaboradores cadastrados
  2. Quantos estão ATIVOS (não use .ativo — leia a dica!)
  3. Quantos estão em licença OU desligados (NÃO ativos)
  4. Nomes de todos do departamento de Tecnologia
  5. Colaboradores sênior que estão ativos
     (seletor combinado: dados + classe)
  6. Colaborador com ingresso mais antigo (menor data-ingresso)
  7. Quantos colaboradores ingressaram a partir de 2022 (inclusive)?
     Dica: filtre o Array com .filter() após Array.from()
  8. Preencher o #relatorio-rh com o sumário final

  NOVOS CONCEITOS:
  ─────────────────
  - :not() para excluir elementos de uma seleção
  - Combinar seletor de atributo com seletor de classe
  - Array.from + filter para filtros numéricos sobre data-*
  ============================================================
*/

'use strict';

console.log('╔══════════════════════════════════════════╗');
console.log('║  EXERCÍCIO 03 — Colaboradores Germinare  ║');
console.log('╚══════════════════════════════════════════╝');


// ─────────────────────────────────────────────────────────
// TAREFA 1 — Total de colaboradores
// Dica: todos têm class="colaborador"
// ─────────────────────────────────────────────────────────
const todos = document.querySelectorAll(".colaborador");
console.log('1. Total:', todos.length);


// ─────────────────────────────────────────────────────────
// TAREFA 2 — Quantos ativos?
// ATENÇÃO: NÃO use querySelectorAll('.ativo').
// Por quê? Porque o badge <span class="ativo-badge"> também
// tem texto "Ativo" e poderia confundir outros seletores.
// Use o seletor combinado correto: div.colaborador.ativo
// Esperado: 6
// ─────────────────────────────────────────────────────────
const ativos = document.querySelectorAll("div.colaborador.ativo");
console.log('2. Ativos:', ativos.length);


// ─────────────────────────────────────────────────────────
// TAREFA 3 — Não ativos (licença + desligados)
// Use :not() para excluir os ativos da seleção total:
// ".colaborador:not(.ativo)"
// Esperado: 3
// ─────────────────────────────────────────────────────────
const naoAtivos = document.querySelectorAll(".colaborador:not(.ativo)");
console.log('3. Não ativos:', naoAtivos.length);


// ─────────────────────────────────────────────────────────
// TAREFA 4 — Colaboradores de Tecnologia
// Use seletor de atributo: [data-depto='tecnologia']
// Exiba o nome de cada um com forEach
// Esperado: Ana Souza, Bruno Lima, Carla Mendes
// ─────────────────────────────────────────────────────────
const tecnologia = document.querySelectorAll("[data-depto='tecnologia']");
console.log('4. Tecnologia:');
tecnologia.forEach((card,index)=>{
  console.log(card.querySelector(".col-nome").textContent)
})


// ─────────────────────────────────────────────────────────
// TAREFA 5 — Sêniors ativos
// Combine seletor de atributo COM seletor de classe:
// ".colaborador.ativo[data-nivel='senior']"
// Esperado: Elena Rocha, Gabriela Nunes
// ─────────────────────────────────────────────────────────
const seniorsAtivos = document.querySelectorAll(".colaborador.ativo[data-nivel='senior']");
console.log('5. Sêniors ativos:');
seniorsAtivos.forEach((card,index)=>{
  console.log("- "+card.querySelector(".col-nome").textContent)
})


// ─────────────────────────────────────────────────────────
// TAREFA 6 — Colaborador mais antigo
// Use Array.from + reduce comparando dataset.ingresso (string → parseInt)
// Esperado: Gabriela Nunes (2018)
// ─────────────────────────────────────────────────────────
const colaboradores = document.querySelectorAll(".colaborador")
const maisAntigo = Array.from(colaboradores).reduce((ant, atual) => {
  return parseInt(atual.dataset.ingresso) < parseInt(ant.dataset.ingresso) ? atual : ant;
});
console.log('6. Mais antigo:',
  maisAntigo.querySelector('.col-nome').textContent,
  '—', maisAntigo.dataset.ingresso
);


// ─────────────────────────────────────────────────────────
// TAREFA 7 — Ingressos a partir de 2022
// Array.from + filter: mantenha apenas quem tem data-ingresso >= 2022
// Esperado: 4 colaboradores
// ─────────────────────────────────────────────────────────
const recentes = Array.from(colaboradores).filter(col => {
  return parseInt(col.dataset.ingresso) >= 2022;
});
console.log('7. Ingressos 2022+:', recentes.length);


// ─────────────────────────────────────────────────────────
// TAREFA 8 — Preencher relatório
// ─────────────────────────────────────────────────────────
const relatorio = document.getElementById('relatorio-rh');
/* relatorio.textContent = `...` */

