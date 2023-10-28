const {readFile} = require('fs');

const targetControls = ['EXPORT_DEFAULT', 'BAD_IMPORT'];

readFile('./results.txt', 'utf-8', (err, data) => {
  for (const control of targetControls) {
    const target = new RegExp(control, 'ig');

    const ERROR = 'TIENES CONTROLES ESTÁTICOS QUE RESOLVER';

    if (target.test(data)) {
      console.log(`\x1b[31m ❌ ${ERROR}: [${control}] ❌ \x1b[0m`);

      console.log(
        `\x1b[33m REVISA EL ARCHIVO: ${process.cwd()}/results.txt  \x1b[0m`,
      );

      throw new Error(ERROR);
    }
  }
});
