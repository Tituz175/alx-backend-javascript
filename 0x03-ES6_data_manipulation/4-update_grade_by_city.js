export default function updateStudentGradeByCity(
  studentLists,
  city,
  newGrades,
) {
  const studentLocation = studentLists.filter((item) => item.location === city);

  return studentLocation.map((item1) => {
    const grade = newGrades.filter((item2) => item2.studentId === item1.id);

    return {
      ...item1,
      grade: grade[0] !== undefined ? grade[0].grade : 'N/A',
    };
  });
}
