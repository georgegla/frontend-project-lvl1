import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const calculateHightestDivisor = (num, num1) => {
  const divisors = [];
  for (let i = 1; i <= num || i <= num1; i += 1) {
    if (num % i === 0 && num1 % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};
const getGameData = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const num = getRandomNumber(1, 100);
  const num1 = getRandomNumber(1, 100);
  const answer = calculateHightestDivisor(num, num1);
  const question = `${num} ${num1}`;
  return [question, String(answer[answer.length - 1])];
};
const calculateGcd = () => startGame(getGameData);
export default calculateGcd;
