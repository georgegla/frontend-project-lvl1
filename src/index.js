import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

const startGame = (gameDescription, rounds) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = rounds[i];
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== answer) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export { startGame };
