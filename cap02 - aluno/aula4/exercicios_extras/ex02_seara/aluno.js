'use strict';
// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  DAD 2026  —  Aula 15  —  Exercício Extra 02 — Seara                   ║
// ║  Criação e Inserção de Elementos: Cardápio Corporativo                 ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  Instituto J&F — Escola de Tecnologia                                  ║
// ║  Prof. Rodolfo Gonçalves da Silva  |  © 2026                           ║
// ╠══════════════════════════════════════════════════════════════════════════╣
// ║  NÍVEL: Básico  |  FORMA: Individual  |  TEMPO: ~15 min               ║
// ║  EMPRESA: Seara — Alimentação Corporativa                              ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const pratos = [
  { id: 'p001', nome: 'Frango Grelhado Seara',    categoria: 'proteína', calorias: 320, preco: 18.50 },
  { id: 'p002', nome: 'Linguiça Seara com Arroz', categoria: 'prato-feito', calorias: 540, preco: 15.90 },
  { id: 'p003', nome: 'Salada de Peito de Peru',  categoria: 'leve',    calorias: 180, preco: 12.00 },
  { id: 'p004', nome: 'Hambúrguer Seara Artesanal', categoria: 'proteína', calorias: 620, preco: 22.00 },
  { id: 'p005', nome: 'Wrap de Frango Seara',     categoria: 'leve',    calorias: 290, preco: 14.50 },
];

// ── TAREFA 1: criarCardPrato(prato) ──────────────────────────────────────────
function criarCardPrato(prato) {
  const card = document.createElement('article'); // dica: document.createElement('___')
  card.className = 'card-prato';
  card.setAttribute('data-id', prato.id);
  card.setAttribute('data-categoria', prato.categoria);

  const titulo = document.createElement('h3');
  titulo.textContent = prato.nome; // dica: propriedade 'nome'

  const cat = document.createElement('span');
  cat.className   = 'card-categoria';
  cat.textContent = `Categoria: ${prato.categoria}`;

  const cal = document.createElement('span');
  cal.className   = 'card-calorias';
  cal.textContent = `${prato.calorias} kcal`;

  const espaco = document.createElement('br')
  const preco = document.createElement('span');
  preco.className   = 'card-preco';
  preco.textContent = `R$ ${prato.preco}`; // dica: template literal `R$ ${prato.preco.___}`

  const btn = document.createElement('button');
  btn.className   = 'btn-pedir';
  btn.setAttribute('type', 'button');
  btn.textContent = 'Pedir';

  card.append(titulo, cat, cal,espaco, preco, btn); // dica: método de inserção múltipla
  return card;
}

// ── TAREFA 2: renderCardapio(lista, container) ───────────────────────────────
function renderCardapio(lista, container) {
  container.innerHTML = '';
  const frag = document.createDocumentFragment(); // dica: document.createDocumentFragment()

  lista.forEach(prato => {
    frag.append(criarCardPrato(prato));
  });

  container.append(frag); // dica: inserir o fragment
  const aviso = document.querySelector('#aviso-dia');
  if (aviso) aviso.textContent = `${lista.length} opções hoje — Seara Restaurante Corporativo`;
}

// ── TAREFA 3: adicionarPrato(prato, container) ───────────────────────────────
// Adicione o novo prato NO INÍCIO da lista (será o prato do dia).
function adicionarPrato(prato, container) {
  if (!prato || !prato.id) return;
  container.prepend(criarCardPrato(prato)); // dica: insere como primeiro filho
}

// ── TAREFA 4: removerPrato(id, container) ────────────────────────────────────
function removerPrato(id, container) {
  const card = container.querySelector(`[data-id="${id}"]`);
  // dica: seletor de atributo — '[data-___="valor"]'
  if (!card) { console.warn(`Prato ${id} não encontrado.`); return; }
  card.remove(); // dica: método moderno de auto-remoção
}

// ── TAREFA 5: destacarPratoDoDia(id, containerDestaque) ──────────────────────
function destacarPratoDoDia(id, containerDestaque) {
  const original = document.querySelector(`[data-id="${id}"]`);
  if (!original) return;
  const clone = original.cloneNode(true); // dica: cópia ___ do nó e filhos
  clone.setAttribute('data-id', id + '-dia');
  containerDestaque.append(clone);
}

// ── PONTO DE ENTRADA ──────────────────────────────────────────────────────────
const cardapio  = document.querySelector('#cardapio-lista');
const pratoDia  = document.querySelector('#prato-dia');

renderCardapio(pratos, cardapio);
destacarPratoDoDia('p001', pratoDia);

window.adicionarPrato = (p) => adicionarPrato(p, cardapio);
window.removerPrato   = (id) => removerPrato(id, cardapio);
