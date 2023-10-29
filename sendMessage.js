const {getGitUserInfo} = require('git-user-info');
const figlet = require('figlet');

const COLORS = {
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
};

const SENTENCES = [
  'Sonreir cada día',
  'Ser respetuoso',
  'Todo tiene solución',
  'Ser feliz y agradecido',
  'La vida es corta, disfruta',
  'HAPPY CODING!',
];

const generateRandomMessage = () => {
  console.log(`${COLORS.YELLOW}    [RECUERDA:]    \x1b[0m`);

  for (const sentence of SENTENCES) {
    console.log(`${COLORS.GREEN}  ✔ ${sentence} \x1b[0m`);
  }

  console.log(`\n\n`);
};

const sendMessage = message => {
  figlet(
    message,
    {
      font: 'Banner',
      horizontalLayout: 'default',
      verticalLayout: 'fitted',
      width: 70,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }

      console.log(data);

      generateRandomMessage();
    },
  );
};

getGitUserInfo().then(data => {
  const [name] = data?.name.split(' ');
  sendMessage(`Welcome \n${name}`);
});
