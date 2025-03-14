const fs = require('fs');

// Create a file named "welcome.txt" containing "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully');
});

// Read and log data from "hello.txt"
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
