const fs = require('fs');

const targetControls = ['BAD_IMPORT', 'EXPORT_DEFAULT'];

fs.readFile('./results.txt', 'utf-8', (err, data) => {
  for (const control of targetControls) {
    let res = 'no results...';
    const target = new RegExp(control, 'ig');

    if (target.test(data)) {
      res = `hay resultados!!! ✅`;

      throw new Error(res);
    }
  }
});
