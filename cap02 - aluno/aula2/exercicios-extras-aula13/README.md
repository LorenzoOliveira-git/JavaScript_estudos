# Exercícios Extras — Aula 13: DOM e Seleção de Elementos
**Disciplina:** DAD 2026 — Desenvolvimento de Aplicações Dinâmicas
**Professor:** Rodolfo Gonçalves da Silva · Germinare TECH / Instituto J&F

> ⚠️ Estes exercícios são **não obrigatórios**.
> Foram criados para quem quer ir além — praticar mais, testar limites, preparar o próximo nível.
> Cada exercício tem sua própria situação-problema, arquivos separados e gabarito comentado.

---

## Estrutura de Pastas

```
exercicios-extras-aula13/
│
├── ex01-vitrine/          ← Nível 1 · Vitrine de Produtos JBS
│   ├── index.html
│   ├── style.css
│   ├── exercicio.js       ← arquivo do aluno
│   └── gabarito.js        ← resolução comentada (professor)
│
├── ex02-cardapio/         ← Nível 2 · Cardápio Seara
│   ├── index.html
│   ├── style.css
│   ├── exercicio.js
│   └── gabarito.js
│
├── ex03-colaboradores/    ← Nível 3 · Lista de Colaboradores
│   ├── index.html
│   ├── style.css
│   ├── exercicio.js
│   └── gabarito.js
│
├── ex04-dashboard/        ← Nível 4 · Dashboard de Indicadores
│   ├── index.html
│   ├── style.css
│   ├── exercicio.js
│   └── gabarito.js
│
└── ex05-formulario/       ← Nível 5 · Formulário de Cadastro
    ├── index.html
    ├── style.css
    ├── exercicio.js
    └── gabarito.js
```

---

## Os 5 Exercícios

| # | Título | Contexto J&F | Conceitos Praticados | Nível |
|---|--------|-------------|----------------------|-------|
| 01 | Vitrine de Produtos JBS | Linha de carnes JBS | `getElementById`, `querySelector`, `textContent`, `classList` | ⭐ Iniciante |
| 02 | Cardápio Seara | Produtos Seara | `querySelectorAll`, `forEach`, `dataset`, `nth-child` | ⭐⭐ Básico |
| 03 | Lista de Colaboradores | RH Germinare | `querySelectorAll`, `filter` via seletor, `not()`, combinadores | ⭐⭐⭐ Intermediário |
| 04 | Dashboard de Indicadores | Painel executivo J&F | Seletores avançados, `Array.from`, `map`, `reduce` sobre DOM | ⭐⭐⭐⭐ Avançado |
| 05 | Formulário de Cadastro | Vagas Banco Original | `querySelectorAll` em formulário, `value`, `checked`, validação simples | ⭐⭐⭐⭐⭐ Desafio |

---

## Como usar

1. Abra a pasta do exercício no VS Code.
2. Leia o `index.html` — entenda a estrutura antes de codar.
3. Abra o `exercicio.js` — leia as instruções de cada tarefa.
4. Ative o `exercicio.js` no `index.html` (verifique o `<script src="...">` no final do body).
5. Abra o `index.html` no navegador → F12 → Console.
6. Resolva. Quando travar, use o `gabarito.js` como referência.

> **Dica de ouro:** tente resolver sem o gabarito primeiro.
> Errar e descobrir o porquê é a forma mais eficiente de aprender DOM.
