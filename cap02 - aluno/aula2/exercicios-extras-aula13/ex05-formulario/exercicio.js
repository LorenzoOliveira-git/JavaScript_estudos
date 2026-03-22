/*
  ============================================================
  EXERCÍCIO 05 — Formulário de Candidatura Banco Original
  Arquivo: exercicio.js  (versão do ALUNO)
  Nível: ⭐⭐⭐⭐⭐ Desafio
  ============================================================

  SITUAÇÃO-PROBLEMA:
  ───────────────────
  O Banco Original recebe candidaturas via formulário HTML.
  Você deve escrever um script que leia todos os campos
  e valide a candidatura automaticamente.

  TAREFAS:
  ─────────
  1. Selecionar todos os campos obrigatórios (.obrigatorio-campo)
     e listar id + value de cada um no console.

  2. Validar: algum campo obrigatório está vazio?
     Use Array.from + filter + .value.trim() === ''
     Esperado com os dados do HTML: nenhum vazio.

  3. Ler o radio selecionado (turno).
     Seletor especial: '[name="turno"]:checked'
     Use .value para obter o valor.
     Esperado: "tarde"

  4. Ler TODOS os checkboxes de habilidades (.check-habilidade)
     e filtrar apenas os marcados (.checked === true).
     Esperado marcados: javascript, html-css, sql

  5. Ler o valor do select (#select-area) e do textarea (#textarea-motivacao).
     Use .value para ambos.

  6. Validar se a motivação tem pelo menos 20 caracteres.
     Use .value.trim().length >= 20

  7. Se não houver erros → exibir resumo no #resultado-validacao.
     Se houver erros → listar os problemas.

  8. Aplicar classe CSS ao resultado:
     resultadoEl.classList.add('valido')   → fundo verde
     resultadoEl.classList.add('invalido') → fundo vermelho

  DICAS:
  ───────
  - .value        → lê o texto de input, select e textarea
  - .checked      → true/false para checkbox e radio
  - :checked      → pseudo-classe CSS para encontrar o radio selecionado
  - classList.add → adiciona uma classe CSS ao elemento
  ============================================================
*/

'use strict';

const textos = document.querySelectorAll(".input-texto")

console.log('╔══════════════════════════════════════════╗');
console.log('║  EXERCÍCIO 05 — Formulário Banco Original║');
console.log('╚══════════════════════════════════════════╝');

// TAREFA 1 — Campos obrigatórios
const camposObrigatorios = document.querySelectorAll(".obrigatorio-campo");
console.log('1. Campos obrigatórios:', camposObrigatorios.length);
camposObrigatorios.forEach((campo,index)=>{
   console.log(`${campo.id} - ${campo.value}`)
})


// TAREFA 2 — Validar campos vazios
const camposVazios = Array.from(textos).filter(campo => {
  return campo.value.trim() === '';
});
console.log('2. Campos vazios:', camposVazios.length);


// TAREFA 3 — Radio selecionado

const radioMarcado = document.querySelector("[name='turno']:checked"); // [name="turno"]:checked
console.log('3. Turno:', radioMarcado.value);


// TAREFA 4 — Checkboxes marcados
const todosChecks   = document.querySelectorAll(".check-habilidade");
const checksMarcados = Array.from(todosChecks).filter(c => c.checked);
console.log('4. Habilidades marcadas:', checksMarcados.length);
/* forEach: log de cada value */


// TAREFA 5 — Select e textarea
const selectArea = document.querySelector(".input-select");
const textarea   = document.querySelector(".input-textarea");
console.log('5. Área:', selectArea.value);
console.log('   Motivação (primeiros 40 chars):',textarea.value.substring(0,40));


// TAREFA 6 — Validar motivação
const motivacaoValida = textarea.value.trim().length >= 20 ;
console.log('6. Motivação válida?', motivacaoValida);


// TAREFA 7 e 8 — Resultado e classe CSS
const erros = [];
if (camposVazios.length > 0) erros.push('Campos vazios: ' + camposVazios.map(c => c.id).join(', '));
if (!radioMarcado)            erros.push('Turno não selecionado');
if (checksMarcados.length === 0) erros.push('Nenhuma habilidade marcada');
if (!motivacaoValida)         erros.push('Motivação muito curta (mínimo 20 caracteres)');

const resultadoEl = document.getElementById('resultado-validacao');

if (erros.length === 0) {
  resultadoEl.textContent = `✅ Candidatura válida!\n` +
    /* complete com os dados lidos */
    `(preencha com nome, email, curso, turno, habilidades, área)`;
  resultadoEl.classList.add("PREENCHA_AQUI"); // 'valido'
} else {
  resultadoEl.textContent = `❌ Erros:\n` + erros.join('\n');
  resultadoEl.classList.add("PREENCHA_AQUI"); // 'invalido'
}
