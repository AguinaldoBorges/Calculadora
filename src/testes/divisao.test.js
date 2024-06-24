const divisao = require('../operacoes/divisao');

describe('modulo de Divisão', () => {
    test('Divisão: 6 / 3 = 2', () => {
        expect(divisao(6, 3)).toBe(2);
    });

    test('Divisão: 25 / 5 = 5', () => {
        expect(divisao(25, 5)).toBe(5);
    });

    test('Divisão: 15.6 / 2 = 7.8', () => {
        expect(divisao(15.6, 2)).toBe(7.8);
    });

    test('Divisão: 8 / 2 = 4', () => {
        expect(divisao(8, 2)).toBe(4);
    });

    test('Divisão: 20 / 4 = 5', () => {
        expect(divisao(20, 4)).toBe(5);
    });

    test('Divisão: divisão por zero', () => {
        expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida');
    });
});
