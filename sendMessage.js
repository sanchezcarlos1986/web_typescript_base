import {getGitUserInfo} from 'git-user-info';
import figlet from 'figlet';
import chalk from 'chalk';

const SENTENCES = ['Sonreir cada día', 'Todo tiene solución', 'HAPPY CODING!'];

const generateRandomMessage = () => {
  console.log(chalk.bgWhite.bold('   RECUERDA:    '));

  for (const sentence of SENTENCES) {
    console.log(chalk.bold.green(` ✔ ${sentence} `));
  }
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

      console.log(chalk.blue(data));

      generateRandomMessage();
    },
  );
};

getGitUserInfo().then(data => {
  const [name] = data?.name.split(' ');
  sendMessage(`Welcome \n${name}`);
});
