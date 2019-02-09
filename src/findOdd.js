/*
 * Given an array, find the int that appears an odd number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 */

findOdd = arr => {
  const countOfInts = new Object();
  for (num in arr) {
    const key = arr[num].toString();
    if (countOfInts.hasOwnProperty(key)) {
      countOfInts[key]["count"] += 1;
    } else {
      countOfInts[key] = { count: 1 };
    }
  }

  for (let k in countOfInts) {
    if (countOfInts[k]["count"] % 2 != 0) return parseInt(k);
  }
};

const arr = [1, 2, 3, 2, 3, 1, 3];
console.log(findOdd(arr));
