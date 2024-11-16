const fs = require('fs')

function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(data.toString())
  })
}

// TODO: Call printFileContents with the command-line argument
const filePath = process.argv[2]
if (!filePath) {
  console.error(
    'Error: No file path provided. Please specify a file path as an argument.'
  )
  process.exit(1)
}

printFileContents(filePath)
