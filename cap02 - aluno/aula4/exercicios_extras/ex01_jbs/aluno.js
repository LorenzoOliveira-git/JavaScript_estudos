'use strict';
// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  DAD 2026  —  Aula 15  —  Exercício Extra 01 — JBS                     ║
// ║  Criação e Inserção de Elementos: Catálogo de Cortes                   ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  Instituto J&F — Escola de Tecnologia                                  ║
// ║  Prof. Rodolfo Gonçalves da Silva  |  © 2026                           ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  NÍVEL: Básico  |  FORMA: Individual  |  TEMPO: ~15 min               ║
// ║  EMPRESA: JBS — Processamento de Carnes                                ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const cortes = [
  { id: 'c001', nome: 'Alcatra Bovina JBS',  tipo: 'bovino', preco: 42.90, peso: '1 kg' },
  { id: 'c002', nome: 'Fraldinha JBS Select', tipo: 'bovino', preco: 38.50, peso: '800 g' },
  { id: 'c003', nome: 'Costela Suína JBS',    tipo: 'suíno',  preco: 29.90, peso: '1.2 kg' },
  { id: 'c004', nome: 'Filé Mignon JBS',      tipo: 'bovino', preco: 89.90, peso: '600 g' },
  { id: 'c005', nome: 'Pernil Suíno JBS',     tipo: 'suíno',  preco: 22.50, peso: '1.5 kg' },
];

// ── TAREFA 1: criarCardCorte(corte) ─────────────────────────────────────────
// Crie um elemento <article> configurado para representar um corte de carne.
// A função deve RETORNAR o elemento — não inserir diretamente.
function criarCardCorte(corte) {
  // 1a. Criar elemento <article> e armazenar em 'card'
  const card = document.createElement('article'); // dica: document.___('article')

  // 1b. Adicionar classe 'card-corte' e data-id, data-tipo
  card.className = 'card-corte'; // dica: string com o nome da classe
  card.setAttribute('data-id',   corte.id);
  card.setAttribute('data-tipo', corte.tipo); // dica: propriedade 'tipo' do objeto

  // 1c. Criar <h3> com o nome do corte (textContent — nunca innerHTML!)
  const titulo  = document.createElement('h3');
  titulo.textContent = corte.nome; // dica: propriedade 'nome' do objeto corte

  // 1d. Criar <span class="card-tipo"> com o tipo do corte
  const tipo = document.createElement('span');
  tipo.className   = 'card-tipo';
  tipo.textContent = corte.tipo;

  // 1e. Criar <span class="card-preco"> com preço formatado "R$ XX.XX"
  const preco = document.createElement('span');
  preco.className   = 'card-preco'; // dica: 'card-preco'
  preco.textContent = `R$ ${corte.preco.toFixed(2)}`;

  // 1f. Criar <span class="card-peso"> com o peso
  const peso = document.createElement('span');
  peso.className   = 'card-peso';
  peso.textContent = corte.peso;

  // 1g. Criar <button class="btn-add-carrinho"> com type="button"
  const btn = document.createElement('button');
  btn.className = 'btn-add-carrinho';
  btn.setAttribute('type', 'button'); // dica: atributo 'type'
  btn.textContent = 'Adicionar ao carrinho';

  // 1h. Adicionar todos os filhos ao card com 1 único append()
  card.append(titulo,tipo,preco,peso,btn); // dica: titulo, tipo, preco, peso, btn

  return card;
}

// ── TAREFA 2: renderCortes(lista, container) ─────────────────────────────────
// Renderize a lista usando DocumentFragment (1 reflow) e limpe o container antes.
function renderCortes(lista, container) {
  // 2a. Limpar o container
  container.innerHTML = ""; // dica: string vazia ''

  // 2b. Criar DocumentFragment
  const frag = document.createDocumentFragment(); // dica: createDocument___()

  // 2c. Para cada corte, criar o card e adicionar ao fragment
  lista.forEach(corte => {
    frag.append(criarCardCorte(corte)); // dica: chame criarCardCorte passando o corte
  });

  // 2d. Inserir o fragment no container (1 único reflow)
  container.append(frag); // dica: método que insere como último filho

  // Atualizar status
  const status = document.querySelector('#status-catalogo');
  if (status) status.textContent = `${lista.length} corte(s) disponíveis — JBS`;
}

// ── TAREFA 3: adicionarCorte(corte, container) ──────────────────────────────
// Adicione um novo corte NO INÍCIO do catálogo (destaque).
function adicionarCorte(corte, container) {
  if (!corte || !corte.id) return;
  const card = criarCardCorte(corte);
  container.prepend(card); // dica: insere como PRIMEIRO filho
}

// ── TAREFA 4: removerCorte(id, container) ───────────────────────────────────
// Localize o card pelo data-id e remova-o do DOM.
function removerCorte(id, container) {
  const card = container.querySelector(`[data-id="${id}"]`);
  // dica: seletor de atributo — '[data-___="valor"]' onde ___ é o atributo data-*
  if (!card) { console.warn(`Corte ${id} não encontrado.`); return; }
  card.remove(); // dica: método que remove o elemento a si mesmo
}

// ── TAREFA 5: destacarCorte(id, containerDestaque) ──────────────────────────
// Clone o card e insira na área de destaque com data-id modificado.
function destacarCorte(id, containerDestaque) {
  const original = document.querySelector(`[data-id="${id}"]`);
  if (!original) return;
  const clone = original.cloneNode(true); // dica: método que ___ profundamente
  clone.setAttribute('data-id', `${id}-destaque`); // dica: id + '-destaque'
  containerDestaque.append(clone); // dica: qual variável é o elemento clonado?
}

// ── PONTO DE ENTRADA ─────────────────────────────────────────────────────────
const catalogo  = document.querySelector('#catalogo-cortes');
const destaque  = document.querySelector('#area-destaque');

renderCortes(cortes, catalogo);
destacarCorte('c004', destaque); // Filé Mignon em destaque

// Exposição global para testes no DevTools:
window.adicionarCorte  = (c) => adicionarCorte(c, catalogo);
window.removerCorte    = (id) => removerCorte(id, catalogo);
window.destacarCorte   = (id) => destacarCorte(id, destaque);
