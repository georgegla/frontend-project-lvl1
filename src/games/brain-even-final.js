import getRandomNumber from '../utils.js';
import { startGame, numberOfRounds } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const defineEvenNumber = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = defineEvenNumber(question) ? 'yes' : 'no';

  return [String(question), answer];
};

const calculateEven = () => {
  const rounds = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }
  return startGame(gameDescription, rounds);
};

export default calculateEven;
