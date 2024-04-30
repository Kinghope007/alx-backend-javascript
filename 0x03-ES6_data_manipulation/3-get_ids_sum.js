export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
} else {
    return students.reduce((sum, x) => sum + x.id, 0);
}
}