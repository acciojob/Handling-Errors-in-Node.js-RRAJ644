const fs = require('fs')

function printFileContents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Column '${filePath}' not found in the CSV.`)
      return
    }
    console.log(data)
  })
}

const filePath = process.argv[2]

printFileContents(filePath)
