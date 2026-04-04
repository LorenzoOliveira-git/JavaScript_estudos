// ═══════════════════════════════════════════════════════════════
//  ███████╗ ██████╗ ██████╗ ███╗   ███╗
//  ██╔════╝██╔═══██╗██╔══██╗████╗ ████║
//  █████╗  ██║   ██║██████╔╝██╔████╔██║
//  ██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║
//  ██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║
//  ╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝
//  Exercício 05 — ⭐⭐⭐⭐⭐ Desafio — Formulário Banco Original
//  Aula 14: leitura de inputs, validação, textContent, innerHTML, dataset
// ═══════════════════════════════════════════════════════════════
'use strict';

// ── Selecionar todos os campos ─────────────────────────────────
const form        = document.getElementById("form-cadastro");
const inputNome   = document.getElementById("input-nome");
const inputEmail  = document.getElementById("input-email");
const selectArea  = document.getElementById("select-area");
const inputSal    = document.getElementById("input-salario");
const checkLGPD   = document.getElementById("check-lgpd");
const preview     = document.getElementById("preview-card");
const msgSucesso  = document.getElementById("msg-sucesso");

// ── TAREFA 01 ─────────────────────────────────────────────────
// Ouça o evento "input" no inputNome.
// A cada tecla, atualize #prev-nome com textContent = inputNome.value.
// dica: inputNome.addEventListener("input", () => { ... })
inputNome.addEventListener("input", () => {
  document.getElementById("prev-nome").textContent = inputNome.value;
});

// ── TAREFA 02 ─────────────────────────────────────────────────
// Ouça o evento "input" no inputEmail.
// A cada tecla, atualize #prev-email com textContent = inputEmail.value.
inputEmail.addEventListener("input",() =>{
  document.querySelector("#prev-email").textContent = inputEmail.value
});

// ── TAREFA 03 ─────────────────────────────────────────────────
// Ouça o evento "change" no selectArea.
// Atualize #prev-area com textContent = selectArea.value.
// Exiba o preview-card removendo a classe "hidden" com removeAttribute.
// dica: preview.removeAttribute("class")  OU  preview.classList.remove("hidden")
selectArea.addEventListener("change", () => {
  document.getElementById("prev-area").textContent = selectArea.value;
  preview.classList.remove("hidden"); // mostrar o preview
});

// ── TAREFA 04 ─────────────────────────────────────────────────
// Ouça o evento "change" nos radio buttons de nivel.
// Use querySelectorAll + forEach para adicionar listener em cada um.
// Quando selecionado, atualize #prev-nivel com textContent.
// dica: document.querySelectorAll('input[name="nivel"]')
document.querySelectorAll('input[name="nivel"]').forEach(radio => {
  radio.addEventListener("change", () => {
    document.getElementById("prev-nivel").textContent = radio.value;
  });
});

// ── TAREFA 05 ─────────────────────────────────────────────────
// Ouça o evento "input" no inputSal.
// Formate o salário como R$ e atualize #prev-salario com textContent.
// dica: Number(inputSal.value).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
inputSal.addEventListener("input", () => {
  if (inputSal.value) {
    document.getElementById("prev-salario").textContent = Number(inputSal.value).toLocaleString('pt-BR',{style:'currency',currency:"BRL"});
  }
});

// ── TAREFA 06 — VALIDAÇÃO ───────────────────────────────────────
// Função que valida um campo e exibe a mensagem de erro.
// Retorna true se válido, false se inválido.
function validarCampo(input, erroId, mensagem, condicao) {
  const erroEl = document.getElementById(erroId);
  if (condicao) { // condicao indica que está INVÁLIDO
    erroEl.textContent   = mensagem;
    input.setAttribute("class", "invalido");
    return false;
  } else {
    erroEl.textContent   = "";
    input.removeAttribute("class");
    return true;
  }
}

// ── TAREFA 07 — SUBMIT ───────────────────────────────────────────
// Ouça o evento "submit" do form.
// Use preventDefault() para não recarregar a página.
// Valide todos os campos usando validarCampo() acima.
// Se tudo válido, exiba sucesso via innerHTML. Se inválido, pare.
form.addEventListener("submit", (event) => {
  event.preventDefault(); // evitar recarregar a página

  const nivel = document.querySelector('input[name="nivel"]:checked');

  // Validações — cada linha deve retornar true ou false
  const v1 = validarCampo(inputNome,  "erro-nome",    "Nome deve ter ao menos 5 caracteres.",
    inputNome.value.trim().length < Number(inputNome.dataset.minlen));

  const v2 = validarCampo(inputEmail, "erro-email",   "E-mail deve ser do domínio @bancooriginal.com.br.",
    !inputEmail.value.endsWith(inputEmail.dataset.dominio));

  const v3 = validarCampo(selectArea, "erro-area",    "Selecione uma área.",
    selectArea.value === "");

  const nivelFake = nivel ? nivel : inputNome; // truque para reutilizar validarCampo
  const v4 = validarCampo(nivelFake, "erro-nivel",   "Selecione um nível.",
    !nivel);

  const v5 = validarCampo(inputSal,  "erro-salario", `Salário mínimo: R$ ${inputSal.dataset.minsal}.`,
    Number(inputSal.value) < Number(inputSal.dataset.minsal));

  const v6 = validarCampo(checkLGPD, "erro-lgpd",   "Você deve aceitar a política de privacidade.",
    !checkLGPD.checked);

  if (v1 && v2 && v3 && v4 && v5 && v6) {
    // ✅ innerHTML seguro: dados vêm dos campos do formulário que você controla
    // e são exibidos APÓS a validação — nunca como HTML bruto de API externa
    msgSucesso.innerHTML =
      `✅ Colaborador <strong>${inputNome.value.trim()}</strong> ` +
      `cadastrado com sucesso na área de <strong>${selectArea.value}</strong>!`;
    msgSucesso.removeAttribute("class"); // remover "hidden"
    form.reset(); // resetar o formulário
  }
});

// ── TAREFA 08 — LIMPAR ─────────────────────────────────────────
// O botão #btn-limpar deve: resetar o formulário, ocultar preview e sucesso.
document.getElementById("btn-limpar").addEventListener("click", () => {
  form.reset();
  preview.setAttribute("class", "hidden");
  msgSucesso.setAttribute("class", "hidden");
  document.querySelectorAll(".msg-erro").forEach(el => el.textContent = "");
});
