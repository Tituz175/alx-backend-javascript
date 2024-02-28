const fs = require('fs');

const countStudents = (fileName) => {
  let totalStudent = -1;
  const student = {};
  try {
    const file = fs.readFileSync(fileName, 'utf-8').toString();
    const lines = file.split('\n');
    lines.forEach((item) => {
      if (item) {
        totalStudent += 1;
      }
      const itemDetails = item.split(',');
      const itemField = itemDetails[3];
      const itemName = itemDetails[0];
      // eslint-disable-next-line no-unused-expressions
      student[itemField] ? student[itemField].push(itemName) : student[itemField] = [itemName];
    });
    console.log(`Number of students: ${totalStudent}`);
    for (const element in student) {
      if (element !== 'field') {
        console.log(`Number of students in ${element}: ${student[element].length}. List: ${student[element].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
