/** Calculate the hourglass sum for every hourglass in the 6×6 array, then print the maximum hourglass sum.
 *
 * An "hourglass sum" is defined as the sum of any 7 entries of the array that are selected by this pattern mask:
 *
 * ✓ ✓ ✓
 *   ✓
 * ✓ ✓ ✓
 * Input Format:
 *
 * There are 6 lines of input, where each line contains 6 space-separated integers describing 2D Array; every entry is in the inclusive range -9 to 9.
 *
 * Output Format
 *
 * Print the largest (maximum) hourglass sum found in the array.
 *
 * Sample Input
 *
 * 1 1 1 0 0 0
 * 0 1 0 0 0 0
 * 1 1 1 0 0 0
 * 0 0 2 4 4 0
 * 0 0 0 2 0 0
 * 0 0 1 2 4 0
 * Sample Output
 *
 * 19
 */

hourglassSum = arr => {
  let maxSum;
  for (y = 0; y < arr.length - 2; y++) {
    for (x = 0; x < arr[y].length - 2; x++) {
      let sum = 0;
      sum += arr[y + 1][x + 1];
      for (i = x; i < x + 3; i++) {
        sum += arr[y][i];
        sum += arr[y + 2][i];
      }
      if (maxSum == null) {
        maxSum = sum;
      } else {
        maxSum = sum > maxSum ? sum : maxSum;
      }
    }
  }
  return maxSum;
};

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

console.log(hourglassSum(arr));
