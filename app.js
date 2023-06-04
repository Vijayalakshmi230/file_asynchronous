const fs = require('fs');


const fileName = 'example.txt';
const fileContent = 'This is an example file content.';


fs.writeFile(fileName, fileContent, (err) => {
  if (err) throw err;
  console.log(`File '${fileName}' created successfully.`);


  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`File content: ${data}`);

    
    const newFileName = 'new_example.txt';
    fs.rename(fileName, newFileName, (err) => {
      if (err) throw err;
      console.log(`File '${fileName}' renamed to '${newFileName}' successfully.`);

     
      fs.access(newFileName, fs.constants.F_OK, (err) => {
        const fileExists = !err;
        console.log(`File '${newFileName}' exists: ${fileExists}`);

        
        fs.stat(newFileName, (err, stats) => {
          if (err) throw err;
          console.log(`File size: ${stats.size} bytes`);
          console.log(`File last modified: ${stats.mtime}`);

         
          fs.unlink(newFileName, (err) => {
            if (err) throw err;
            console.log(`File '${newFileName}' deleted successfully.`);

            
            const fileAttributes = fs.constants;
            console.log('File attributes:');
            console.log(fileAttributes);

            
            const filePath = './';
            fs.lstat(filePath, (err, stats) => {
              if (err) throw err;
              const isFile = stats.isFile();
              const isDirectory = stats.isDirectory();
              console.log(`'${filePath}' is a file: ${isFile}`);
              console.log(`'${filePath}' is a directory: ${isDirectory}`);
            });
          });
        });
      });
    });
  });
});
