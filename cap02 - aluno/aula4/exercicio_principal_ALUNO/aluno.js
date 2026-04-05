'use strict';
// ══════════════════════════════════════════════════════════════════════════
//  DAD 2026 — Aula 15 — EXERCÍCIO DO ALUNO
//  Criação, Inserção e Remoção de Elementos
//  Instituto J&F — Escola de Tecnologia
//  Prof. Rodolfo Gonçalves da Silva
//  © 2026
// ══════════════════════════════════════════════════════════════════════════
//
//  INSTRUÇÕES:
//  Implemente todas as funções marcadas com PREENCHA_AQUI.
//  Salve o arquivo e recarregue o index.html no navegador para testar.
//  Ao terminar, cole o bloco de VERIFICAÇÃO FINAL no console (F12).
//
// ══════════════════════════════════════════════════════════════════════════


// ══════════════════════════════════════════════════════════════════════════
//  PASSO 1 — DADOS
//  Array de objetos representando os produtos do catálogo Seara/JBS.
//  Cada produto possui: id, nome, preco e categoria.
// ══════════════════════════════════════════════════════════════════════════

const produtos = [
  { id: 'p001', nome: 'Frango Inteiro Seara',     preco: 18.90, categoria: 'carnes'     },
  { id: 'p002', nome: 'Linguiça Toscana Seara',   preco: 12.50, categoria: 'embutidos'  },
  { id: 'p003', nome: 'Hambúrguer JBS 400g',      preco: 15.90, categoria: 'carnes'     },
  { id: 'p004', nome: 'Frango Assado Seara',       preco: 22.00, categoria: 'carnes'     },
  { id: 'p005', nome: 'Presunto Seara Fatiado',   preco:  9.80, categoria: 'embutidos'  },
  { id: 'p006', nome: 'Almôndega JBS Temperada',  preco: 11.40, categoria: 'processados'},
];


// ══════════════════════════════════════════════════════════════════════════
//  PASSO 2 — FUNÇÃO criarCard(produto)
//
//  Crie um elemento <article> com classe 'card-produto'.
//  Defina os atributos data-id e data-categoria com os valores do produto.
//  Dentro do card, crie:
//    - um <h3> com classe 'card-titulo' e o nome do produto
//    - um <span> com classe 'card-preco' e o preço formatado (R$ X.XX)
//    - um <button> com type='button', classe 'btn-detalhes' e texto 'Ver detalhes'
//  Monte os três elementos dentro do card com .append().
//  Retorne o card criado.
// ══════════════════════════════════════════════════════════════════════════

function criarCard(produto) {

  // PREENCHA_AQUI — crie o elemento raiz do card (article)
  

  // PREENCHA_AQUI — atribua className e os atributos data-id e data-categoria


  // PREENCHA_AQUI — crie o <h3> com a classe e o nome do produto


  // PREENCHA_AQUI — crie o <span> com a classe e o preço formatado (toFixed)


  // PREENCHA_AQUI — crie o <button> com type, classe e texto


  // PREENCHA_AQUI — monte a árvore: card.append(titulo, preco, btn)


  // PREENCHA_AQUI — retorne o card

}


// ══════════════════════════════════════════════════════════════════════════
//  PASSO 3 — FUNÇÃO renderProdutos(lista, container)
//
//  Limpe o conteúdo do container.
//  Crie um DocumentFragment.
//  Para cada produto da lista, crie um card e adicione ao Fragment.
//  Ao final, insira o Fragment no container.
// ══════════════════════════════════════════════════════════════════════════

function renderProdutos(lista, container) {

  // PREENCHA_AQUI — limpe o container (container.innerHTML)


  // PREENCHA_AQUI — crie um DocumentFragment


  // PREENCHA_AQUI — percorra a lista com forEach e adicione cada card ao Fragment


  // PREENCHA_AQUI — insira o Fragment no container

}


// ══════════════════════════════════════════════════════════════════════════
//  PASSO 4 — FUNÇÃO adicionarProduto(produto, container)
//
//  Valide se o produto existe e possui id e nome.
//  Se inválido, retorne sem fazer nada.
//  Crie o card e insira-o no INÍCIO do container com prepend().
// ══════════════════════════════════════════════════════════════════════════

function adicionarProduto(produto, container) {

  // PREENCHA_AQUI — validação: se !produto || !produto.id || !produto.nome, retorne


  // PREENCHA_AQUI — insira o card no início do container com prepend()

}


// ══════════════════════════════════════════════════════════════════════════
//  PASSO 5 — FUNÇÃO removerProduto(idProduto, container)
//
//  Localize o card dentro do container usando querySelector com o seletor
//  de atributo: [data-id="idProduto"].
//  Se não encontrado, exiba um aviso no console e retorne.
//  Se encontrado, remova o card do DOM com .remove().
// ══════════════════════════════════════════════════════════════════════════

function removerProduto(idProduto, container) {

  // PREENCHA_AQUI — localize o card pelo data-id dentro do container


  // PREENCHA_AQUI — se não encontrado, exiba console.warn e retorne


  // PREENCHA_AQUI — remova o card do DOM

}


// ══════════════════════════════════════════════════════════════════════════
//  PASSO 6 — FUNÇÃO clonarDestaque(idProduto, containerDestaque)
//
//  Localize o card original em qualquer parte do documento.
//  Se não encontrado, retorne sem fazer nada.
//  Clone o card com cloneNode(true) (cópia profunda).
//  Altere o data-id do clone para idProduto + '-destaque'.
//  Insira o clone no containerDestaque.
// ══════════════════════════════════════════════════════════════════════════

function clonarDestaque(idProduto, containerDestaque) {

  // PREENCHA_AQUI — localize o card original no documento inteiro


  // PREENCHA_AQUI — se não encontrado, retorne


  // PREENCHA_AQUI — crie uma cópia profunda com cloneNode(true)


  // PREENCHA_AQUI — atualize o data-id do clone (idProduto + '-destaque')


  // PREENCHA_AQUI — insira o clone no containerDestaque

}


// ══════════════════════════════════════════════════════════════════════════
//  PASSO 7 — INICIALIZAÇÃO
//
//  Selecione os containers #catalogo e #destaques com querySelector.
//  Chame renderProdutos() para exibir o catálogo completo.
//  Chame clonarDestaque() para destacar ao menos um produto.
// ══════════════════════════════════════════════════════════════════════════

const catalogo  = /* PREENCHA_AQUI — document.querySelector('#catalogo')  */ null;
const destaques = /* PREENCHA_AQUI — document.querySelector('#destaques') */ null;

// PREENCHA_AQUI — chame renderProdutos() passando produtos e catalogo


// PREENCHA_AQUI — chame clonarDestaque() passando o id de um produto e destaques
//                 ATENÇÃO: sempre após renderProdutos, pois o card precisa existir no DOM
