import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getGameData = () => {
  const question = getRandomNumber(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
const brainPrm = () => startGame(getGameData);
export default brainPrm;
