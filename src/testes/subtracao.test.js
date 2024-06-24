const subtracao = require('../operacoes/subtracao');

describe('modulo de Subtração', () => {
    test('Subtração: 5 - 2 = 3', () => {
        expect(subtracao(5, 2)).toBe(3);
    });

    test('Subtração: 10 - 7 = 3', () => {
        expect(subtracao(10, 7)).toBe(3);
    });

    test('Subtração: 20.5 - 10.2 = 10.3', () => {
        expect(subtracao(20.5, 10.2)).toBe(10.3);
    });

    test('Subtração: 15 - 5 = 10', () => {
        expect(subtracao(15, 5)).toBe(10);
    });

    test('Subtração: 30 - 20 = 10', () => {
        expect(subtracao(30, 20)).toBe(10);
    });
});
