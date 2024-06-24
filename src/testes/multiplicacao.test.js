const multiplicacao = require('../operacoes/multiplicacao');

describe('modulo de Multiplicação', () => {
    test('Multiplicação: 2 * 3 = 6', () => {
        expect(multiplicacao(2, 3)).toBe(6);
    });

    test('Multiplicação: 5 * 5 = 25', () => {
        expect(multiplicacao(5, 5)).toBe(25);
    });

    test('Multiplicação: 7.5 * 2 = 15', () => {
        expect(multiplicacao(7.5, 2)).toBe(15);
    });

    test('Multiplicação: 4 * 4 = 16', () => {
        expect(multiplicacao(4, 4)).toBe(16);
    });

    test('Multiplicação: 10 * 10 = 100', () => {
        expect(multiplicacao(10, 10)).toBe(100);
    });
});
