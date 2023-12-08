import { calculateFn } from './calculator';

describe('calculator', () => {
    it('should perform simple addiction', () => {
        expect(calculateFn(2, 2, '+')).toBe(4)
    });
    it('should perform simple division', () => {
        expect(calculateFn(2, 2, '/')).toBe(1)
    });
    it('should perform simple multiplication', () => {
        expect(calculateFn(2, 3, '*')).toBe(6)
    });
    it('should perform simple subtraction', () => {
        expect(calculateFn(3, 3, '-')).toBe(0)
    });
});