import game from '../index.js';

const getRandomNumber = (max = 3) => Math.floor(Math.random() * max);

const getRandomOper = () => {
  const oper = ['-', '+', '*'];
  return (oper[getRandomNumber()]);
};
const getRandomNumber1 = (max = 25) => Math.floor(Math.random() * max);
const getGameData = () => {
  const expression = `${getRandomNumber1()}${getRandomOper()}${getRandomNumber1()}`;
  console.log('What is the result of the expression?');
  const question = expression;
  const answer = eval(expression);
  return [question, String(answer)];
};
const brainCalc = () => game(getGameData);
export default brainCalc;
