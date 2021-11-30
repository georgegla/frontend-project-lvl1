import game from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getRandomOper = () => {
  const oper = ['-', '+', '*'];
  return (oper[getRandomNumber(0, 2)]);
};
const getGameData = () => {
  const expression = `${getRandomNumber(1, 25)}${getRandomOper()}${getRandomNumber(1, 25)}`;
  console.log('What is the result of the expression?');
  const question = expression;
  const answer = eval(expression);
  return [question, String(answer)];
};
const brainCalc = () => game(getGameData);
export default brainCalc;
