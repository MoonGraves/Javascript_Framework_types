const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

/* //Käyttäjä näpyttää sinne jotakin
rl.question(` What is ${num1} + ${num2} `,
(userInput)=> {
  console.log(userInput);
});
*/

///JOS vastaus täsmää tämä random lasku, kuin while loop
rl.question(` What is ${num1} + ${num2} `,
(userInput)=> {
  if(userInput.trim() == answer) {
    rl.close();
  }

  else 
  {
    rl.setPrompt('Incorrect \n ');
    rl.prompt();
    rl.on('line', (userInput)=> {

      if(userInput.trim() == answer)
      rl.close();

      else{
        rl.setPrompt(`Answer of ${userInput} is incorrect\n`);
        rl.prompt();
      }

    });
  }
});

//Kun vastaus täsmää, niin on oikein
rl.on('close', () => {
  console.log('Correct');
})
