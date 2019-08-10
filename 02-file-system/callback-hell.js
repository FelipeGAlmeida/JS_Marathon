const fs = require('fs');

fs.readFile('my-file.txt', 'utf8', (error, data) => {
   if (error) throw error;
   fs.writeFile('my-file.txt', data + '\ncallback Hell', (error) => {
       if (error) throw error;
       fs.writeFile('my-logfile.txt', new Date().toISOString(), (error) => {
           if (error) throw error;
           console.log('Process has been finished!');
       });
   });
});