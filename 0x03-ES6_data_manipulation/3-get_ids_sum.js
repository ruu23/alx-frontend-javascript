export default function getStudentIdsSum(students) {
  return students.reduce((prev, next) => prev + next.id, 0);
}
