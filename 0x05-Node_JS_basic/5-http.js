const http = require('http');
const { readFile } = require('fs');

const countStudents = (fileName) => {
  let totalStudent = -1;
  const student = {};
  return new Promise((resovle, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
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
        let response = `Number of students: ${totalStudent}\n`;
        for (const element in student) {
          if (element !== 'field') {
            response += `Number of students in ${element}: ${student[element].length}. List: ${student[element].join(', ')}\n`;
          }
        }
        resovle(response);
      }
    });
  });
};

const database = process.argv[2];
const port = 1245;
const host = 'localhost';

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students');
    countStudents(database)
      .then((response) => {
        res.end(response.slice(0, -1));
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, host, () => { });

module.exports = app;
