import getRandomNumber from '../getRandomNumber.js';
import game from '../index.js';

const parityNumber = (number) => number % 2 === 0;
const getGameData = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = getRandomNumber(1, 100);
  const question = number;
  const answer = parityNumber(number) ? 'yes' : 'no';
  return [question, String(answer)];
};
const brainEven = () => game(getGameData);
export default brainEven;
