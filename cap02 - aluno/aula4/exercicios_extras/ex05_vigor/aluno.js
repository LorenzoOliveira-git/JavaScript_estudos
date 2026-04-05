'use strict';
// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  DAD 2026  —  Aula 15  —  Exercício Extra 05 — Vigor                   ║
// ║  DOM Avançado: Painel de Pedidos com Mover Entre Listas                ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  Instituto J&F — Escola de Tecnologia                                  ║
// ║  Prof. Rodolfo Gonçalves da Silva  |  © 2026                           ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  NÍVEL: Avançado  |  FORMA: Mesa (4-5 alunos)  |  TEMPO: ~25 min     ║
// ║  EMPRESA: Vigor — Laticínios e Alimentos                               ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const pedidos = [
  { id: 'ped001', produto: 'Iogurte Vigor Natural 170g',   qtd: 48, preco_unit: 2.90, status: 'pendente' },
  { id: 'ped002', produto: 'Queijo Minas Vigor 500g',       qtd: 24, preco_unit: 14.50, status: 'pendente' },
  { id: 'ped003', produto: 'Requeijão Vigor Cremoso 200g',  qtd: 36, preco_unit: 6.90, status: 'pendente' },
  { id: 'ped004', produto: 'Leite Longa Vida Vigor 1L',     qtd: 120, preco_unit: 4.80, status: 'pendente' },
  { id: 'ped005', produto: 'Creme de Leite Vigor 200g',     qtd: 60, preco_unit: 3.20, status: 'pendente' },
];

// ── TAREFA 1: criarCardPedido(pedido, listaPendentes, listaEntregues) ─────────
// Crie o card com dois botões: "Marcar Entregue" e "Cancelar".
// "Marcar Entregue" deve MOVER (não clonar) o card para listaEntregues.
// "Cancelar" deve REMOVER o card.
// Atenção: os callbacks precisam receber as duas listas para mover o card.
function criarCardPedido(pedido, listaPendentes, listaEntregues) {
  const card = document.createElement('article'); // dica: 'article'
  card.className = 'card-pedido';
  card.setAttribute('data-id',     pedido.id);
  card.setAttribute('data-status', pedido.status); // dica: pedido.status

  const total = pedido.qtd * pedido.preco_unit;

  const info = document.createElement('div');
  info.className = 'pedido-info';

  const nome = document.createElement('p');
  nome.className   = 'pedido-nome';
  nome.textContent = pedido.produto; // dica: pedido.produto

  const qtd = document.createElement('p');
  qtd.className   = 'pedido-qtd';
  qtd.textContent = `${pedido.qtd} unidades × R$ ${pedido.preco_unit.toFixed(2)}`;

  info.append(nome,qtd); // dica: nome, qtd

  const totalEl = document.createElement('p');
  totalEl.className   = 'pedido-total';
  totalEl.textContent = `R$ ${total.toFixed(2)}`;

  // Botões de ação
  const acoes = document.createElement('div');
  acoes.className = 'pedido-acoes';

  const btnEntregar = document.createElement('button');
  btnEntregar.className   = 'btn-entregar';
  btnEntregar.setAttribute('type', 'button');
  btnEntregar.textContent = 'Marcar Entregue';
  btnEntregar.addEventListener('click', () => {
    // DESAFIO: mover o card de listaPendentes para listaEntregues
    // append MOVE o elemento — não precisa de remove() antes!
    card.setAttribute('data-status', 'entregue'); // dica: 'entregue'
    document.querySelector("#lista-entregues").append(card);  // dica: qual lista recebe o card entregue?
    btnEntregar.remove(); // dica: remover o botão de entregar após uso
    atualizarResumo(listaPendentes, listaEntregues);
  });

  const btnCancelar = document.createElement('button');
  btnCancelar.className   = 'btn-cancelar';
  btnCancelar.setAttribute('type', 'button');
  btnCancelar.textContent = 'Cancelar';
  btnCancelar.addEventListener('click', () => {
    card.remove(); // dica: auto-remoção
    atualizarResumo(listaPendentes, listaEntregues);
  });

  acoes.append(btnEntregar, btnCancelar); // dica: adicionar também btnCancelar
  card.append(info, totalEl, acoes); // dica: adicionar acoes
  return card;
}

// ── TAREFA 2: renderPedidos(lista, containerPendentes, containerEntregues) ────
function renderPedidos(lista, containerPendentes, containerEntregues) {
  containerPendentes.innerHTML = '';
  containerEntregues.innerHTML = '';
  const frag = document.createDocumentFragment();

  lista.forEach(pedido => {
    const card = criarCardPedido(pedido); // dica: 3 argumentos
    frag.append(card);
  });

  containerPendentes.append(frag); // dica: inserir o fragment
  atualizarResumo(containerPendentes, containerEntregues);
}

// ── TAREFA 3: atualizarResumo(pendentes, entregues) ──────────────────────────
// Conta os cards em cada container e atualiza o #resumo.
// Use querySelectorAll('[data-id]') para contar os cards.
function atualizarResumo(pendentes, entregues) {
  const nPend = pendentes.querySelectorAll('[data-id]').length;  // dica: '[data-id]'
  const nEntr = entregues.querySelectorAll('[data-id]').length;  // dica: '[data-id]'
  const resumo = document.querySelector('#resumo');
  if (resumo) {
    resumo.textContent = `Vigor — Pedidos: ${nPend} pendente(s)  |  ${nEntr} entregue(s)`;
  }
}

// ── TAREFA 4 (avançado): adicionarPedido(pedido) ─────────────────────────────
// Adicione um novo pedido no INÍCIO da lista de pendentes.
function adicionarPedido(pedido) {
  const pendentes = document.querySelector('#lista-pendentes');
  const entregues = document.querySelector('#lista-entregues');
  if (!pedido || !pedido.id || !pendentes) return;
  const card = criarCardPedido(pedido, pendentes, entregues); // dica: 2 containers
  pendentes.prepend(card); // dica: insere no início
  atualizarResumo(pendentes, entregues);
}

// ── PONTO DE ENTRADA ──────────────────────────────────────────────────────────
const pendentes = document.querySelector('#lista-pendentes');
const entregues = document.querySelector('#lista-entregues');

renderPedidos(pedidos, pendentes, entregues);

window.adicionarPedido = adicionarPedido;

// Teste avançado no console:
// adicionarPedido({ id:'ped099', produto:'Manteiga Vigor 200g', qtd:30, preco_unit:8.90, status:'pendente' })
// → Aparece no topo da lista de pendentes com botões funcionais
