/**
 * Function to create an object with department name and employees.
 * @param {string} departmentName - The name of the department.
 * @param {Array} employees - The array of employee names.
 * @returns {Object} - An object with department name and employees.
 */
export default function createEmployeesObject(departmentName, employees) {
    return {
	    [departmentName]: employees
    };
}
