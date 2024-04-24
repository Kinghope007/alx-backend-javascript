/**
 * Function to create a report object.
 * @param {Object} employeesList - The list of employees.
 * @returns {Object} - The report object.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
