const fs = require('fs');

const targetControls = ['BAD_IMPORT', 'EXPORT_DEFAULT'];

fs.readFile('./results.txt', 'utf-8', (err, data) => {
  for (const control of targetControls) {
    const target = new RegExp(control, 'ig');

    if (target.test(data)) {
      console.error(`TIENES CONTROLES ESTÁTICOS QUE RESOLVER`);
      console.error(`REVISA EL ARCHIVO: ${process.cwd()}/results.txt`);

      // throw new Error();
      process.exit();
    }
  }
});
