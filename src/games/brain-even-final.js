import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const defineEvenNumber = (number) => number % 2 === 0;
const getGameData = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const question = getRandomNumber(1, 100);
  const answer = defineEvenNumber(question) ? 'yes' : 'no';
  return [question, String(answer)];
};
const calculateEven = () => startGame(getGameData);
export default calculateEven;
