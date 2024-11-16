const fs = require('fs');

function printFileContents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`Error: Column '${filePath}' not found in the CSV.`);
      } else if (err.code === 'EACCES') {
        console.error(`Error: Permission denied to access the file at '${filePath}'.`);
      } else {
        console.error(`Error: An error occurred while reading the file: ${err.message}`);
      }
      return;
    }
    console.log(data);
  });
}

// Retrieve the command-line argument
const filePath = process.argv[2];

if (!filePath) {
  console.error("Error: No file path provided. Please specify a file path as an argument.");
  process.exit(1);
}

// Call the function with the provided argument
printFileContents(filePath);
