export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeinfo = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeinfo ? gradeinfo.grade : 'N/A',
      };
    });
}
