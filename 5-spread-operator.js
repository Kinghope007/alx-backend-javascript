/**
 * Function to concatenate two arrays and spread characters of a string using spread syntax.
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @param {string} string - The string to spread.
 * @returns {Array} - The concatenated array with spread characters of the string.
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
