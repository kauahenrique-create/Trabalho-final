# 🍪 Cookiera - Aplicação Web de Gestão e Receitas

## 📋 Sobre o Projeto
Aplicação web interativa desenvolvida para consulta, gestão de receitas de cookies e carrinho de compras, utilizando integração com a API do Open Food Facts e persistência de dados via Supabase. O projeto foi construído focando em boas práticas de software, testes automatizados integrados com CI/CD no GitHub Actions e conteinerização com Docker.

---

## 👥 Integrantes do Grupo

| Nome Completo | Matrícula | Função Principal |
| :--- | :--- | :--- |
| Kauã Henrique Tolentino Nunes | 22612244 | Frontend, Docker & CI/CD |
| Rachel Tolentino de Sena | 22612246 | Frontend & Persistência |

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Backend / Persistência:** Supabase (PostgreSQL Cloud)
- **API Externa:** [Open Food Facts API](https://wiki.openfoodfacts.org/API)
- **Testes Unitários:** Jest
- **CI/CD:** GitHub Actions
- **Conteinerização:** Docker & Docker Hub (Nginx Alpine)

---

## ⚙️ Regras do Processo e Governança

- **Proteção da Main:** Commits diretos na branch `main` foram desativados via Branch Protection Rules no GitHub.
- **Workflow de PR:** Todo o código novo foi integrado exclusivamente através de Pull Requests.
- **Validação Automatizada:** Pipeline de CI executou a suíte de testes unitários (`app.test.js`) via GitHub Actions a cada PR submetido antes de permitir o merge.

---

## 🧪 Testes Automatizados

Para executar a suíte de testes unitários localmente na tua máquina:

```bash
# Instalar dependências
npm install

# Executar os testes unitários com Jest
npm test