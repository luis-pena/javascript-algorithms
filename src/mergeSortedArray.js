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
const mergeSortedArray = function(A, B) {
  return A.concat(B).sort((a, b) => a - b);
};
