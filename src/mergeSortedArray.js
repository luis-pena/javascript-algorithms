/**
 * Merge Two Sorted Arrays
 * Merge two given sorted integer array A and B into a new sorted integer array.
 *
 * Example
 * A=[1,2,3,4]
 *
 * B=[2,4,5,6]
 *
 *return [1,2,2,3,4,4,5,6]
 * @param A: sorted integer array A
 * @param B: sorted integer array B
 * @return: A new sorted integer array
 */
mergeSortedArray = (a, b) => {
  return a.concat(a).sort((x, y) => x - y);
};

const a = [1, 2, 3, 4];
const b = [2, 4, 5, 6];

console.log(mergeSortedArray(a, b));
