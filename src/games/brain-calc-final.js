import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

function calculate(operand1, operand2, operations) {
  switch (operations) {
    case '-':
      return operand1 - operand2;
    case '+':
      return operand1 + operand2;
    case '*':
      return operand1 * operand2;
    default:
      return 'Operator not found!';
  }
}

const operations = ['-', '+', '*'];

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operation = operations[getRandomNumber(0, operations.length - 1)];

  const question = `${number1} ${operation} ${number2}`;
  const answer = calculate(number1, number2, operation);

  return [question, String(answer)];
};

const calculateExpression = () => {
  const rounds = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }

  return startGame(gameDescription, rounds);
};

export default calculateExpression;
