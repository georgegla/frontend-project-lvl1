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

const generateRound = () => {
  const oper = ['-', '+', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operation = oper[getRandomNumber(0, oper.length - 1)];

  const question = [`${number1} ${operation} ${number2}`];
  const answer = [calculate(number1, number2, operation)];
  // const rounds = [question, String(answer)];

  return [question, String(answer)];
};

const calculateExpression = () => {
  const gameDescription = 'What is the result of the expression?';

  const rounds = [];
  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }

  return startGame(gameDescription, rounds);
};

export default calculateExpression;
