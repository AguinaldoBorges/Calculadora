# Calculadora com Testes Unitários

Este projeto é uma calculadora simples com operações básicas (soma, subtração, multiplicação e divisão) implementada em JavaScript. O foco principal é demonstrar a implementação de testes unitários usando o framework Jest, garantindo a confiabilidade e a precisão das operações matemáticas.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar a criação de testes unitários em JavaScript utilizando Jest. Cada operação matemática é testada para garantir que funcione corretamente, mesmo em cenários de borda, como a divisão por zero.

## Funcionalidades

- Soma de dois números
- Subtração de dois números
- Multiplicação de dois números
- Divisão de dois números, com tratamento de divisão por zero

## Estrutura do Projeto

```
.
├── operacoes
│   ├── soma.js
│   ├── subtracao.js
│   ├── multiplicacao.js
│   └── divisao.js
├── testes
│   ├── soma.test.js
│   ├── subtracao.test.js
│   ├── multiplicacao.test.js
│   └── divisao.test.js
├── app.js
└── package.json
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/aguinaldo-borges/calculadora-com-testes-unitarios.git
cd calculadora-com-testes-unitarios
```

2. Instale as dependências:

```bash
npm install
```

## Uso

Para utilizar as funções da calculadora, você pode executar o arquivo `app.js`:

```bash
node app.js
```

## Testes

Os testes são escritos utilizando o framework Jest. Para rodar os testes, utilize o comando:

```bash
npm test
```

### Exemplo de Teste de Soma

```javascript
const soma = require('./operacoes/soma');

describe('modulo de Soma', () => {
    test('Soma: 1 + 2 = 3', () => {
        expect(soma(1, 2)).toBe(3);
    });
    // Mais testes...
});
```

Cada operação tem seu próprio conjunto de testes localizado na pasta `testes`.
