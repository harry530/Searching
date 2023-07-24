const readline = require('readline/promises');
const colors = require('colors');
const { stdin: input, stdout: output } = require('process');
let searchFun = (name) => {
    let ob = {
      "name0": "Harry",
      "name1": "Mark",
      "name2": "Jane",
      "name0": "Peter",
      "name1": "Jack",
      "name2": "Jennifer",
    };
    let flag = false;
    for (let key in ob) {
      if (ob[key].toUpperCase() == name.toUpperCase()) {
        console.log(`The name ${colors.red(name)} exist in the list.`);
        flag = true;
      }
    }
    if (!flag) {
      console.log(`The name ${colors.red(name)} does not exist in the list.`);
    }
  }

(async () => {
  const rl = readline.createInterface({ input, output });
  try {
    const answer = await rl.question(colors.yellow('Who are you? '));
    console.log(`Hi dear ${colors.red(answer.trim())}!`);
  } catch(err) {    
    console.log(`Error: `, err);
  } finally {
    rl.close();
  }
  const rl2 = readline.createInterface({ input, output });
  try {
    const answer = await rl2.question(colors.yellow('What\'s the name you\'re looking for? '));
    searchFun(answer.trim());
  } catch(err) {    
    console.log(`Error: `, err);
  } finally {
    rl2.close();
  }
  process.exit(1);
})();