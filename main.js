import chalk from 'chalk';

console.log(chalk.red("Lost in cosmos!"));
console.log(chalk.green("Green text working."));
console.log(chalk.hex("#EE8800").underline("Orange text with underline."));
console.log(chalk.hex("#000000")(chalk.bgRed("Black text with black background.")));
//black red get noch nicht ganz



//npm i chalk
//starten: node main.js
//import fix, wegen der version:
//https://bobbyhadz.com/blog/javascript-error-err-require-esm-require-of-es-module-not-supported#chalk-error-err_require_esm-require-of-es-module-not-supported


//Downgrading your chalk version

//To solve the chalk error, downgrade the version of the package to 4.1.2 by running the /following command: npm install chalk@4.1.2 .

//This is the last version of chalk that is built with CommonJS.

//The recommendation in the release notes of the chalk package is that if you're using chalk with TypeScript or a build tool you should downgrade to version 4.1.2.

//To install version 4 of chalk, open your terminal in the root directory of your project and run the following command.
//shell

//npm install chalk@4.1.2