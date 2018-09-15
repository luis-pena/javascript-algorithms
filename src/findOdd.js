/*
 * Given an array, find the int that appears an odd number of times.
 * 
 * There will always be only one integer that appears an odd number of times.
 */

function findOdd(A) {
  let countOfInts = new Object();
  for (num in A) {
    key = A[num].toString();
    if (countOfInts.hasOwnProperty(key)) {
      countOfInts[key]["count"] += 1;
    } else {
      countOfInts[key] = { count: 1 };
    }
  }

  for (let k in countOfInts) {
    if (countOfInts[k]["count"] % 2 != 0) return parseInt(k);
  }
}
