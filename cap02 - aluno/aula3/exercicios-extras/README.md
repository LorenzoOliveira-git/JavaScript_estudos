# Exercícios Extras — Aula 14

**Disciplina:** DAD 2026 — Desenvolvimento de Aplicações Dinâmicas  
**Tema:** Manipulação de Conteúdo: textContent, innerText, innerHTML e dataset

## Estrutura de Pastas

```
exercicios-extras-aula14/
├── README.md
├── ex01-vitrine/          ⭐ Iniciante
│   ├── index.html
│   ├── style.css
│   ├── exercicio.js       ← versão do aluno (PREENCHA_AQUI)
│   └── gabarito.js        ← versão do professor
├── ex02-cardapio/         ⭐⭐ Básico
├── ex03-colaboradores/    ⭐⭐⭐ Intermediário
├── ex04-dashboard/        ⭐⭐⭐⭐ Avançado
└── ex05-formulario/       ⭐⭐⭐⭐⭐ Desafio
```

## Os 5 Exercícios

| # | Título | Contexto J&F | Conceitos Praticados | Nível |
|---|---|---|---|---|
| 01 | Vitrine JBS | JBS — catálogo de carnes | `textContent`, `getAttribute`, `dataset`, `querySelectorAll` | ⭐ |
| 02 | Cardápio Seara | Seara — cardápio com filtros | `dataset` camelCase, `replace`, `innerHTML` seguro, `reduce` | ⭐⭐ |
| 03 | RH Germinare | Germinare TECH — gestão de RH | dataset como chave de lookup, `toLocaleString`, `Set`, `filter` | ⭐⭐⭐ |
| 04 | Dashboard J&F | Grupo J&F — KPIs financeiros | dataset numérico, `setAttribute style`, cálculo de % de meta | ⭐⭐⭐⭐ |
| 05 | Formulário Banco Original | Banco Original — cadastro RH | `input.value`, `select.value`, `checkbox.checked`, validação, `preventDefault` | ⭐⭐⭐⭐⭐ |

## Como Usar

### Para o aluno
1. Abra a pasta do exercício no VS Code
2. Ative `exercicio.js` no `<script src>` do `index.html` (comente o gabarito)
3. Substitua todos os `PREENCHA_AQUI` com o código correto
4. Abra com Live Server e verifique: F12 → Console → zero erros vermelhos

### Para o professor
- O `gabarito.js` já está ativo em cada `index.html`
- Cada tarefa tem bloco `/* === TAREFA X === */` com explicação detalhada
- Bônus ao final de cada gabarito demonstra conceito avançado relacionado

## Dica de Ouro

> **Regra de segurança desta aula:**
> - Dados do usuário → **sempre** `textContent`
> - HTML do **seu** código → `innerHTML` (com cautela)
> - Metadados `data-*` → `dataset.nomeCamelCase`
> - Atributos nativos → `getAttribute` / `setAttribute`
