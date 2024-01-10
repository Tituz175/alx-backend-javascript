export default function updateStudentGradeByCity(
  studentLists,
  city,
  newGrades
) {
  let studentLocation = studentLists.filter((item) => {
    return item.location === city;
  });

  return studentLocation.map((item1) => {
    let grade = newGrades.filter((item2) => item2.studentId === item1.id);
    if (grade[0] != undefined) {
      return {
        ...item1,
        grade: grade[0].grade,
      };
    } else {
      return {
        ...item1,
        grade: "N/A",
      };
    }
  });
}
