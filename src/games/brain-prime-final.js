import game from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isPrime = (number) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const getGameData = () => {
  const number = getRandomNumber(2, 100);
  const question = number;
  const answer = isPrime(number);
  return [question, answer];
};
const brainPrm = () => game(getGameData);
export default brainPrm;
