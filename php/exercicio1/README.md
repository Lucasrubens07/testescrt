# Exercício: Cadastro Simples com Validação e Armazenamento

Este exercício consiste na criação de um formulário de cadastro que valida os campos de entrada e armazena os dados em um arquivo `.json` utilizando PHP.

## Objetivo

Praticar a criação de formulários com HTML, validação de campos no front-end, e manipulação de dados no back-end com PHP, incluindo o salvamento em arquivo JSON.

## Estrutura do Projeto

- `index.html`: contém o formulário com os campos de nome, e-mail e senha.
- `enviar.php`: script responsável por receber os dados via POST e salvar em um arquivo `.json`.

### Campos do formulário:

- **Nome**: campo de texto.
- **E-mail**: validado pelo atributo `type="email"` (HTML5).
- **Senha**: precisa ter no mínimo 6 caracteres (usando `minlength`).

## Tecnologias Usadas

- HTML5
- PHP (funções `json_encode` e `file_put_contents`)

## Feedback do Desenvolvimento

Esse exercício foi bem interessante de ser desenvolvido, tive que praticar como transformar os dados do $_POST em `.json`, como receber caracteres especiais e também como sobrescrever com `file_put_contents`.
