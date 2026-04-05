'use strict';
// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  DAD 2026  —  Aula 15  —  Exercício Extra 04 — Flora                   ║
// ║  Criação Dinâmica + Filtro por Linha de Produto                        ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  Instituto J&F — Escola de Tecnologia                                  ║
// ║  Prof. Rodolfo Gonçalves da Silva  |  © 2026                           ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  NÍVEL: Intermediário  |  FORMA: Dupla  |  TEMPO: ~22 min             ║
// ║  EMPRESA: Flora — Higiene e Cosméticos                                 ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const produtos = [
  { id: 'f001', nome: 'Sabonete Flora Rosas',      linha: 'banho',   volume: '90 g',   preco:  3.50 },
  { id: 'f002', nome: 'Shampoo Flora Hidratação',  linha: 'cabelo',  volume: '350 ml', preco: 12.90 },
  { id: 'f003', nome: 'Condicionador Flora Argan', linha: 'cabelo',  volume: '350 ml', preco: 13.50 },
  { id: 'f004', nome: 'Creme Hidratante Flora',    linha: 'cuidados',volume: '200 ml', preco:  9.90 },
  { id: 'f005', nome: 'Sabonete Líquido Flora',    linha: 'banho',   volume: '250 ml', preco:  6.50 },
  { id: 'f006', nome: 'Máscara Flora Nutrição',    linha: 'cabelo',  volume: '300 g',  preco: 18.90 },
];

// ── TAREFA 1: criarCardProduto(produto) ──────────────────────────────────────
function criarCardProduto(produto) {
  const card = document.createElement('article'); // dica: document.createElement('article')
  card.className = 'card-produto';
  card.setAttribute('data-id',    produto.id);
  card.setAttribute('data-linha', produto.linha); // dica: produto.linha

  const h3    = document.createElement('h3');
  h3.textContent = produto.nome;

  const linha = document.createElement('p');
  linha.className   = 'card-linha';
  linha.textContent = `Linha: ${produto.linha}`;

  const vol = document.createElement('p');
  vol.className   = 'card-volume';
  vol.textContent = produto.volume;

  const preco = document.createElement('p');
  preco.className   = 'card-preco'; // dica: 'card-preco'
  preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

  const btn = document.createElement('button');
  btn.className   = 'btn-comprar';
  btn.setAttribute('type', 'button');
  btn.textContent = 'Comprar';

  card.append(h3,linha,vol,preco,btn); // dica: h3, linha, vol, preco, btn
  return card;
}

// ── TAREFA 2: renderCatalogo(lista, container) ────────────────────────────────
function renderCatalogo(lista, container) {
  container.innerHTML = '';
  const frag = document.createDocumentFragment(); // dica: document.createDocumentFragment()
  lista.forEach(p => frag.append(criarCardProduto(p)));
  container.append(frag); // dica: insira o fragment no container

  const status = document.querySelector('#status-flora');
  if (status) status.textContent = `${lista.length} produto(s) — Linha Flora`;
}

// ── TAREFA 3: adicionarProduto(produto, container) ────────────────────────────
function _adicionarProduto(produto, container) {
  if (!produto || !produto.id) return;
  container.prepend(criarCardProduto(produto)); // dica: insere no início
}

// ── TAREFA 4: removerProduto(id, container) ───────────────────────────────────
function _removerProduto(id, container) {
  const card = container.querySelector(`[data-id="${id}"]`); // dica: seletor '[data-id="valor"]' — use template literal com o id
  if (!card) { console.warn(`Produto ${id} não encontrado.`); return; }
  card.remove(); // dica: auto-remoção sem precisar do pai
}

// ── TAREFA 5: filtrarPorLinha(linha, container) ───────────────────────────────
// DESAFIO: filtrar a lista e re-renderizar com apenas a linha selecionada.
// 'todos' deve mostrar todos os produtos.
function _filtrarPorLinha(linha, container) {
  const lista = linha === 'todos'
    ? produtos       // dica: array completo 'produtos'
    : produtos.filter(p => p.linha === linha); // dica: método filter

  renderCatalogo(lista, container); // dica: lista filtrada e container
}

// ── TAREFA 6 (bônus): clonarComoLancamento(id, containerLancamento) ──────────
function clonarComoLancamento(id, containerLancamento) {
  const original = document.querySelector(`[data-id="${id}"]`);
  if (!original) return;
  const clone = original.cloneNode(true); // dica: cópia profunda
  clone.setAttribute('data-id', id + '-lancamento');
  containerLancamento.append(clone); // dica: inserir ao final
}

// ── PONTO DE ENTRADA ──────────────────────────────────────────────────────────
const catalogo    = document.querySelector('#catalogo-flora');
const lancamentos = document.querySelector('#lancamentos');

renderCatalogo(produtos, catalogo);
clonarComoLancamento('f006', lancamentos); // Máscara Flora em lançamento

window.filtrarPorLinha   = (l) => _filtrarPorLinha(l, catalogo);
window.adicionarProduto  = (p) => _adicionarProduto(p, catalogo);
window.removerProduto    = (id) => _removerProduto(id, catalogo);

// Teste no console:
// filtrarPorLinha('cabelo', catalogo) → 3 cards
// filtrarPorLinha('banho', catalogo)  → 2 cards
// filtrarPorLinha('todos', catalogo)  → 6 cards
