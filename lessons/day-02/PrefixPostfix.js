let a = 1;
let b = 2;

let c = ++a + b++;

/**
 * prefix > right operand > assignment > Postfix
 * a = 2;
 * b = 2;
 * c = 4
 */

console.log('a = ${a}. b = ${b}, c = ${c}');;