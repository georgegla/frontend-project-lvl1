import game from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getGameData = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const num = getRandomNumber(1, 100);
  const num1 = getRandomNumber(1, 100);
  const answer = [];
  const question = `${num} ${num1}`;
  for (let i = 1; i <= num || i <= num1; i += 1) {
    if (num % i === 0 && num1 % i === 0) {
      answer.push(i);
    }
  }
  return [question, String(answer[answer.length - 1])];
};
const brainGcd = () => game(getGameData);
export default brainGcd;
