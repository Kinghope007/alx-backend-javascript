/**
 * Function to get the current year.
 * @returns {number} - The current year.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Function to create a budget object for the current year.
 * @param {number} income - The income value.
 * @param {number} gdp - The GDP value.
 * @param {number} capita - The capita value.
 * @returns {Object} - The budget object for the current year.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
