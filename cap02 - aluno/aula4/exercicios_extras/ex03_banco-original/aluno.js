  'use strict';
  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  DAD 2026  —  Aula 15  —  Exercício Extra 03 — Banco Original          ║
  // ║  Criação Dinâmica: Dashboard de Transações                             ║
  // ╠══════════════════════════════════════════════════════════════════════════╣
  // ║  Instituto J&F — Escola de Tecnologia                                  ║
  // ║  Prof. Rodolfo Gonçalves da Silva  |  © 2026                           ║
  // ╠══════════════════════════════════════════════════════════════════════════╣
  // ║  NÍVEL: Intermediário  |  FORMA: Dupla  |  TEMPO: ~20 min             ║
  // ║  EMPRESA: Banco Original — Financeiro                                  ║
  // ╚══════════════════════════════════════════════════════════════════════════╝

  const transacoes = [
    { id: 't001', descricao: 'Salário JBS',              tipo: 'credito',  valor:  4800.00, data: '2026-03-01' },
    { id: 't002', descricao: 'Aluguel',                  tipo: 'debito',   valor: -1200.00, data: '2026-03-05' },
    { id: 't003', descricao: 'TED — Conta Seara',        tipo: 'transfer', valor:  -350.00, data: '2026-03-10' },
    { id: 't004', descricao: 'Bônus produtividade JBS',  tipo: 'credito',  valor:   800.00, data: '2026-03-12' },
    { id: 't005', descricao: 'Supermercado',             tipo: 'debito',   valor:  -280.50, data: '2026-03-15' },
  ];

  // ── TAREFA 1: criarCardTransacao(tx) ─────────────────────────────────────────
  // Crie um card de transação com destaque visual diferente por tipo
  // (classes CSS: positivo/negativo no valor, data-tipo no card).
  function criarCardTransacao(tx) {
    const card = document.createElement('article'); // dica: 'article'
    card.className = 'card-transacao';
    card.setAttribute('data-id',   tx.id);
    card.setAttribute('data-tipo', tx.tipo); // dica: propriedade 'tipo' do objeto

    // Bloco de informações (esquerda)
    const info = document.createElement('div');

    const desc = document.createElement('p');
    desc.className   = 'transacao-desc';
    desc.textContent = tx.descricao; // dica: tx.descricao

    const data = document.createElement('p');
    data.className   = 'transacao-data';
    data.textContent = tx.data;

    info.append(desc, data);

    // Bloco de valor + botão (direita)
    const direita = document.createElement('div');
    direita.style.display    = 'flex';
    direita.style.alignItems = 'center';

    const valor = document.createElement('span');
    valor.className = tx.valor > 0 ? 'transacao-valor positivo' : 'transacao-valor negativo';
    // dica: 'transacao-valor positivo' se tx.valor > 0, 'transacao-valor negativo' se < 0
    // Use um operador ternário: tx.valor > 0 ? '...' : '...'
    valor.textContent = `${tx.valor > 0 ? '+' : ''}R$ ${Math.abs(tx.valor).toFixed(2)}`;

    const btn = document.createElement('button');
    btn.className   = 'btn-remover';
    btn.setAttribute('type', 'button');
    btn.textContent = 'Remover';
    // O botão chama removerTransacao com o id da transação
    btn.addEventListener('click', () => removerTransacao(tx.id, card.parentElement));

    direita.append(valor,btn); // dica: adicionar valor e btn

    card.append(info, direita); // dica: adicionar direita
    return card;
  }

  // ── TAREFA 2: renderExtrato(lista, container) ────────────────────────────────
  // Renderize o extrato e atualize o saldo total.
  function renderExtrato(lista, container) {
    container.innerHTML = '';
    const frag = document.createDocumentFragment();

    lista.forEach(tx => frag.append(criarCardTransacao(tx)));
    container.append(frag); // dica: inserir o fragment

    // Calcular e exibir saldo total
    const saldo = lista.reduce((acc, tx) => acc + tx.valor, 0);
    const saldoEl = document.querySelector('#saldo-total');
    if (saldoEl) {
      saldoEl.textContent = `Saldo total: R$ ${saldo.toFixed(2)} — ${lista.length} transação(ões)`;
    }
  }

  // ── TAREFA 3: adicionarTransacao(tx, container) ──────────────────────────────
  // Adicione no INÍCIO (mais recente primeiro) sem re-renderizar tudo.
  function adicionarTransacao(tx, container) {
    if (!tx || !tx.id) return;
    container.prepend(criarCardTransacao(tx));
    // dica: prepend insere como primeiro filho
  }

  // ── TAREFA 4: removerTransacao(id, container) ────────────────────────────────
  function removerTransacao(id, container) {
    if (!container) return;
    const card = container.querySelector(`[data-id="${id}"`);
    // dica: seletor '[data-id="valor"]'
    if (!card) { console.warn(`Transação ${id} não encontrada.`); return; }
    card.remove(); // dica: auto-remoção
  }

  // ── TAREFA 5: clonarUltimaTransacao(container, containerDestaque) ────────────
  // Clone a transação mais recente (primeira do extrato) e exiba em destaque.
  function clonarUltimaTransacao(container, containerDestaque) {
    const primeira = container.firstElementChild;
    if (!primeira) return;

    const clone = primeira.cloneNode(true); // dica: cópia profunda
    const idOriginal = clone.getAttribute('data-id');
    clone.setAttribute('data-id', idOriginal + '-recente'); // dica: + '-recente'
    containerDestaque.append(clone);
  }

  // ── PONTO DE ENTRADA ──────────────────────────────────────────────────────────
  const extrato  = document.querySelector('#lista-transacoes');
  const recentes = document.querySelector('#ultimas-transacoes');

  renderExtrato(transacoes, extrato);
  clonarUltimaTransacao(extrato, recentes);

  window.adicionarTransacao = (tx) => adicionarTransacao(tx, extrato);
  window.removerTransacao   = (id) => removerTransacao(id, extrato);
