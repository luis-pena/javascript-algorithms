/**
 * Digit Counts
 * Count the number of k's between 0 and n. k can be 0 - 9.
 *
 * Example
 * if n = 12, k = 1 in
 *
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 * we have FIVE 1's (1, 10, 11, 12)
 * @param k: An integer
 * @param n: An integer
 * @return: An integer denote the count of digit k in 1..n
 */
digitCounts = (k, n) => {
  let kCounter = 0;
  for (let i = 0; i <= n; i++) {
    for (var digit of i.toString()) {
      if (digit === k.toString()) {
        kCounter++;
      }
    }
  }
  return kCounter;
};

console.log(digitCounts(1, 12));
