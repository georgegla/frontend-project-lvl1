import game from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getRandomOper = () => {
  const oper = ['-', '+', '*'];
  return (oper[getRandomNumber(0, 2)]);
};
const getGameData = () => {
  const number1 = getRandomNumber(1, 25);
  const number2 = getRandomNumber(1, 25);
  const operation = getRandomOper();
  console.log('What is the result of the expression?');
  const question = `${number1} ${operation} ${number2}`;
  const answer = eval(question);
  return [question, String(answer)];
};
const brainCalc = () => game(getGameData);
export default brainCalc;
