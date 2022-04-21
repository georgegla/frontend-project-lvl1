import { startGame, numberOfRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const calcProgression = (startOfProgression, progressionStep, progressionLength) => {
  const result = [startOfProgression];
  let nextElement = startOfProgression;

  for (let i = 0; i <= progressionLength; i += 1) {
    nextElement += progressionStep;
    result.push(nextElement);
  }
  return result;
};

const generateRound = () => {
  const progressionStep = getRandomNumber(1, 9);
  const startOfProgression = getRandomNumber(0, 21);
  const progressionLength = 8;

  const result = calcProgression(startOfProgression, progressionStep, progressionLength);

  const secretElement = result[getRandomNumber(0, result.length - 1)];

  const indexOfElementPRG = result.indexOf(secretElement);
  result[indexOfElementPRG] = '..';

  const answer = String(secretElement);
  const question = result.join(' ');

  return [question, answer];
};

const calculateProgression = () => {
  const rounds = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }
  return startGame(gameDescription, rounds);
};

export default calculateProgression;
