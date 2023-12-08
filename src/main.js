const calculate = require('./calculator')

const args = process.argv.slice(2);
const xArg = args[0];
const yArg = args[1];
const opArg = args[2];

if (typeof xArg !== 'string') {
    throw new Error('First operand has not passed')
}
if (typeof yArg !== 'string') {
    throw new Error('Second operand has not passed')
}
if (typeof opArg !== 'string') {
    throw new Error('Operator has not passed')
}

const x = Number.parseFloat(xArg);
const y = Number.parseFloat(yArg);

if (Number.isNaN(x)) {
    throw new Error('First operand is not a number');
}
if (Number.isNaN(y)) {
    throw new Error('Second operand is not a number');
}
if (!['+', '-', '/', '%', '*'].includes(opArg)) {
    throw new Error('Unknown operand')
}

console.log(calculate(x, y, opArg))