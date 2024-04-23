/**
 * Function to create a budget object using shorthand property syntax.
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The capita value.
 * @returns {Object} - The budget object with income, gdp, and capita properties.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
