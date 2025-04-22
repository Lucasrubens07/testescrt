# Exercício: Calculadora de Investimentos

Este exercício em PHP calcula o crescimento acumulado de um valor com base em uma série de taxas de juros mensais, utilizando o conceito de **juros compostos**.

## Tecnologias

- PHP 

## Objetivo

Aplicar conceitos matemáticos de juros compostos em programação, praticar estruturas de repetição e manipulação de arrays.

## Feedback do Desenvolvimento

Tive que estudar melhor os conceitos propostos no exercício para entender o que estava sendo solicitado, mas ao compreender consegui desenvolver a lógica.

## Lógica

Para cada taxa no array de juros, aplica-se a fórmula:

```php
valorAcumulado = (valorAcumulado + 1) * (juros n + 1) - 1;

O código aplica o conceito de rendimento acumulado, um valor cresce e no mês seguinte os juros são aplicados sobre o novo valor, e não sobre o inicial.




