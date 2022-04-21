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

  const divisors = calculateHightestDivisor(num, num1);
  const question = `${num} ${num1}`;
  const answer = String(divisors[divisors.length - 1]);
  return [question, answer];
};

const calculateGcd = () => {
  const rounds = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }
  return startGame(gameDescription, rounds);
};

export default calculateGcd;
