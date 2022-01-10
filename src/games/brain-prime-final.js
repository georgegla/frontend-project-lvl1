import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getGameData = () => {
  const questionString = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = getRandomNumber(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  const rounds = [question, answer];
  return [questionString, rounds];
};
const calculatePrimeNumber = () => startGame(getGameData);
export default calculatePrimeNumber;
