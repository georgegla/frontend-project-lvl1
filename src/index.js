import readlineSync from 'readline-sync';

const startGame = (questionString, rounds) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(questionString);

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    console.log(`Question: ${rounds[i][0]}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== rounds[i][1]) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${rounds[i][1]}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
