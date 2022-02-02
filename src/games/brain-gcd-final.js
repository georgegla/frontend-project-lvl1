import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculateHightestDivisor = (num, num1) => {
  const divisors = [];
  for (let i = 0; i <= num || i <= num1; i += 1) {
    if (num % i === 0 && num1 % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const generateRound = () => {
  const num = getRandomNumber(1, 100);
  const num1 = getRandomNumber(1, 100);

  const answer = calculateHightestDivisor(num, num1);
  const question = `${num} ${num1}`;

  return [question, String(answer[answer.length - 1])];
};
const calculateGcd = () => {
  const rounds = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }
  return startGame(gameDescription, rounds);
};

export default calculateGcd;
