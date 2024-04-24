/**
 * Function to append a string to each value in an array.
 * @param {Array} array - The array to modify.
 * @param {string} appendString - The string to append to each value.
 * @returns {Array} - The modified array with the string appended to each value.
 */
export default function appendToEachArrayValue(array, appendString) {
  for (let value in array) {
    array[value] = appendString + array[value];
  }

  return array;
}
