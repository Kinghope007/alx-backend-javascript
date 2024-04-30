export default function getListStudentIds(student) {
   if (!Array.isArray(student)) {
      return [];
    } else {
      return student.map((x) => x.id);
    }
}