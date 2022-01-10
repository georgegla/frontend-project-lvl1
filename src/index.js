import readlineSync from 'readline-sync';

const numberOfRounds = 3;
const startGame = (getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const [questionString] = getGameData();
  console.log(questionString);
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [, rounds] = getGameData();
    console.log(`Question: ${rounds[0]}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== rounds[1]) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${rounds[1]}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
