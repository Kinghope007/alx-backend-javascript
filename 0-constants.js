/**
 * FUnctiioin to return a sring with const
 * @return {string} - the preference string.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Function to return a string indicating a combination.
 * @returns {string} - The combined string.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Function to return a string with a combination using let.
 * @returns {string} - The combined string.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

export default { taskFirst, taskNext };
