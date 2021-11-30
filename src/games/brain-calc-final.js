import game from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const calculate = (number1, number2, oper) => {
  switch (oper) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      return 'Operator not found!';
  }
};
const getGameData = () => {
  const oper = ['-', '+', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operation = oper[getRandomNumber(0, 2)];
  console.log('What is the result of the expression?');
  const question = `${number1} ${operation} ${number2}`;
  const answer = calculate(number1, number2, operation);
  return [question, String(answer)];
};
const brainCalc = () => game(getGameData);
export default brainCalc;
