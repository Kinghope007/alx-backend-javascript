/**
 * Function to create an iterator object for every employee in every department.
 * @param {Object} report - The report object created with createReportObject function.
 * @returns {IterableIterator<string>} - An iterator to go through every employee in every department.
 */
export default function createIteratorObject(report) {
  // Define a generator function to yield each employee
  function* iterateEmployees() {
    // Loop through each department in the report
    for (const department in report.allEmployees) {
      const employees = report.allEmployees[department];
      // Loop through each employee in the department
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  // Return the iterator object
  return {
    [Symbol.iterator]: iterateEmployees
  };
}
