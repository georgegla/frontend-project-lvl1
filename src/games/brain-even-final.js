import getRandomNumber from '../utils.js';
import { startGame, numberOfRounds } from '../index.js';

const defineEvenNumber = (number) => number % 2 === 0;

const generateRound = () => {
  const question = String(getRandomNumber(1, 100));
  const answer = defineEvenNumber(question) ? 'yes' : 'no';

  return [question, answer];
};

const calculateEven = () => {
  const rounds = [];

  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }
  return startGame(gameDescription, rounds);
};

export default calculateEven;
