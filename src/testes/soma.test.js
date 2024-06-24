const soma = require('../operacoes/soma');

describe('modulo de Soma', () => {
    test('Soma: 1 + 2 = 3', () => {
        expect(soma(1, 2)).toBe(3);
    });

    test('Soma: 5 + 2 = 7', () => {
        expect(soma(5, 2)).toBe(7);
    });

    test('Soma: 25.5 + 12.3 = 37.8', () => {
        expect(soma(25.5, 12.3)).toBe(37.8);
    });

    test('Soma: 8 + 3 = 11', () => {
        expect(soma(8, 3)).toBe(11);
    });

    test('Soma: 10 + 20 = 30', () => {
        expect(soma(10, 20)).toBe(30);
    });
});
