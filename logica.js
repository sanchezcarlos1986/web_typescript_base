const {readFile} = require('fs');

const TARGET_CONTROLS = ['EXPORT_DEFAULT', 'BAD_IMPORT'];
const TARGET_FILE = 'results.txt';
const regExp = control => new RegExp(control, 'ig');
const ERROR = 'TIENES CONTROLES ESTÁTICOS QUE RESOLVER';

readFile(`./${TARGET_FILE}`, 'utf-8', (err, data) => {
  if (err) {
    throw new Error(`there was an error reading the file ${TARGET_FILE}`);
  }

  for (const control of TARGET_CONTROLS) {
    if (regExp(control).test(data)) {
      console.log(`\x1b[31m ❌ ${ERROR}: [${control}] ❌ \x1b[0m`);

      console.log(
        `\x1b[33m REVISA EL ARCHIVO: ${process.cwd()}/${TARGET_FILE}  \x1b[0m`,
      );

      throw new Error(ERROR);
    }
  }
});
