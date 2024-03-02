const { readFile } = require('fs');

const readDatabase(filePath) => {
  const student = {};
  return (new Promise((res, rej) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        lines.forEach((item) => {
          const itemDetails = item.split(',');
          const itemField = itemDetails[3];
          const itemName = itemDetails[0];
          // eslint-disable-next-line no-unused-expressions
          student[itemField] ? student[itemField].push(itemName) : student[itemField] = [itemName];
        });
        for (const element in student) {
          if (element !== 'field') {
            console.log(`Number of students in ${element}: ${student[element].length}. List: ${student[element].join(', ')}`);
          }
        }
        resovle(student);
      }
    })
  }))
};
