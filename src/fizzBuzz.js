/**
 * Fizz Buzz
 * Given number n. Print number from 1 to n. But:
 *
 * when number is divided by 3, print "fizz".
 * when number is divided by 5, print "buzz".
 * when number is divided by both 3 and 5, print "fizz buzz".
 * Example
 * If n = 15, you should return:
 *
 * [
 *   "1", "2", "fizz",
 *   "4", "buzz", "fizz",
 *   "7", "8", "fizz",
 *   "buzz", "11", "fizz",
 *   "13", "14", "fizz buzz"
 * ]
 * @param n: An integer
 * @return: A list of strings.
 */
const fizzBuzz = function(n) {
  let index = 1;
  let response = [];
  while (index <= n) {
    if (index % 5 === 0 && index % 3 === 0) {
      response.push("fizz buzz");
    } else if (index % 5 === 0) {
      response.push("buzz");
    } else if (index % 3 === 0) {
      response.push("fizz");
    } else response.push(index.toString());
    index++;
  }
  return response;
};
