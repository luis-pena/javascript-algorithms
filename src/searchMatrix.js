/**
 * Search a 2D Matrix
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 *
 * This matrix has the following properties:
 *
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 * Example
 * Consider the following matrix:
 *
 * [
 *     [1, 3, 5, 7],
 *     [10, 11, 16, 20],
 *     [23, 30, 34, 50]
 * ]
 * Given target = 3, return true.
 * @param matrix: matrix, a list of lists of integers
 * @param target: An integer
 * @return: a boolean, indicate whether matrix contains target
 */
searchMatrix = (matrix, target) => {
  for (m = 0; m < matrix.length; m++) {
    for (x = 0; x <= matrix[m].length - 1; x++) {
      if (matrix[m][x] === target) {
        return true;
      } else if (target < matrix[m][x]) {
        return false;
      }
    }
  }
  return false;
};

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
const target = 3;
console.log(searchMatrix(matrix, target));
