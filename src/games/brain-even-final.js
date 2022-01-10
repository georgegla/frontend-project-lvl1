import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const defineEvenNumber = (number) => number % 2 === 0;
const getGameData = () => {
  const questionString = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = String(getRandomNumber(1, 100));
  const answer = defineEvenNumber(question) ? 'yes' : 'no';
  const rounds = [question, answer];
  return [questionString, rounds];
};
const calculateEven = () => startGame(getGameData);
export default calculateEven;
