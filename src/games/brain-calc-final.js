import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['-', '+', '*'];

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '-':
      return operand1 - operand2;
    case '+':
      return operand1 + operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`operator not found - '${operator}'`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operation = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${number1} ${operation} ${number2}`;
  const answer = String(calculate(number1, number2, operation));

  return [question, answer];
};

const calculateExpression = () => {
  const rounds = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }

  return startGame(gameDescription, rounds);
};

export default calculateExpression;
