export default function getStudentsByLocation(students, city) {
   if (!Array.isArray(students)) {
      return [];
    } else {
      return students.filter((x) => x.location === city);
    }
}   