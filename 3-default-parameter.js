/**
 * Function to get the sum of numbers with default parameter values.
 * @param {number} initialNumber - The initial number.
 * @param {number} expansion1989 - The expansion in 1989.
 * @param {number} expansion2019 - The expansion in 2019.
 * @returns {number} - The sum of the numbers.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
