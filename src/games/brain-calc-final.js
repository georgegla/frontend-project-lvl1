import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const calculate = (operand1, operand2, oper) => {
  switch (oper) {
    case '-':
      return operand1 - operand2;
    case '+':
      return operand1 + operand2;
    case '*':
      return operand1 * operand2;
    default:
      return 'Operator not found!';
  }
};
const getGameData = () => {
  const oper = ['-', '+', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operation = oper[getRandomNumber(0, oper.length - 1)];
  const questionString = 'What is the result of the expression?';
  const question = `${number1} ${operation} ${number2}`;
  const answer = calculate(number1, number2, operation);
  const rounds = [question, String(answer)];
  return [questionString, rounds];
};
const calculateExpression = () => startGame(getGameData);
export default calculateExpression;
