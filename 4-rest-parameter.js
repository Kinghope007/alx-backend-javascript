/**
 * Function to return the number of arguments passed using rest parameter syntax.
 * @param {...any} args - The arguments passed to the function.
 * @returns {number} - The number of arguments passed.
 */
export default function returnHowManyArguments(...args) {
  return args.length;
}
