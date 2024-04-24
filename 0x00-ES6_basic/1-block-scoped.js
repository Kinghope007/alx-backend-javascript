/**
 * Function to return an array with two boolean values.
 * @param {boolean} trueOrFalse - Indicates whether to update the values of the variables.
 * @returns {Array} - An array containing two boolean values.
 */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
