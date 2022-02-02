import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};
const calculatePrimeNumber = () => {
  const rounds = [];

  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }
  return startGame(gameDescription, rounds);
};

export default calculatePrimeNumber;
