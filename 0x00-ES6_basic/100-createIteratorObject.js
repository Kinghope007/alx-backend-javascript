/**
 * Function to create an iterator object for every employee in every department.
 * @param {Object} report - The report object created with createReportObject function.
 * @returns {IterableIterator<string>} - An iterator to go through every employee.
 */
export default function createIteratorObject(report) {
  const array = [];
  for (const item of Object.values(report.allEmployees)) {
	  array.push(...item);
  }
  return array;
}
