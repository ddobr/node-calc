const calculate = require('./calculator')

describe('calculator', () => {
    it('should perform simple addiction', () => {
        expect(calculate(2, 2, '+')).toBe(4)
    });
    it('should perform simple division', () => {
        expect(calculate(2, 2, '/')).toBe(1)
    });
    it('should perform simple multiplication', () => {
        expect(calculate(2, 3, '*')).toBe(6)
    });
    it('should perform simple subtraction', () => {
        expect(calculate(3, 3, '-')).toBe(0)
    });
});