/**
 * Kth Largest Element
 * Find K-th largest element in an array.
 *
 * Example
 * In array [9,3,2,4,8], the 3rd largest element is 4.
 *
 * In array [1,2,3,4,5], the 1st largest element is 5, 2nd largest element is 4, 3rd largest element is 3 and etc.
 * @param n: An integer
 * @param nums: An array
 * @return: the Kth largest element
 */

kthLargestElement = (n, nums) => {
  const indexToReturn = nums.length - n;
  return nums.sort((a, b) => a - b)[indexToReturn];
};

const n = 3;
const nums = [9, 3, 2, 4, 8];

console.log(kthLargestElement(n, nums));
