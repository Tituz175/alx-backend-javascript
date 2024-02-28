const fs = require('fs');

const countStudents = (fileName) => {
  let totalStudent = -1;
  const cs = [];
  const swe = [];
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
      if (itemField === 'CS') {
        cs.push(itemName);
      } else if (itemField === 'SWE') {
        swe.push(itemName);
      }
    });
    console.log(`Number of students: ${totalStudent}`);
    if (cs) {
      console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    }
    if (swe) {
      console.log(`Number of students in SWE: ${swe.length} List: ${swe.join(', ')}`);
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
