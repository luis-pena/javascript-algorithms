/**
 * Trailing Zeros
 * Write an algorithm which computes the number of trailing zeros in n factorial.
 *
 * Example
 * 11! = 39916800, so the out should be 2
 * @param n: A long integer
 * @return: An integer, denote the number of trailing zeros in n!
 */

trailingZeros = n => {
  return n ? Math.floor(n / 5) + trailingZeros(Math.floor(n / 5)) : 0;
};

console.log(trailingZeros(11));
