import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const calcProgression = (numberOfProgresion, differenceOfProgression, progressionLength) => {
  const result = [];
  let numberOfProgresion1 = numberOfProgresion;
  result.push(numberOfProgresion);

  for (let i = 0; i <= progressionLength; i += 1) {
    numberOfProgresion1 += differenceOfProgression;
    result.push(numberOfProgresion1);
  }
  return result;
};

const generateQA = () => {
  const differenceOfProgression = getRandomNumber(1, 9);
  const numberOfProgresion = getRandomNumber(0, 21);
  const progressionLength = 8;

  const result = calcProgression(numberOfProgresion, differenceOfProgression, progressionLength);
  const secretElementPRG = result[getRandomNumber(0, result.length - 1)];
  const indexOfElementPRG = result.indexOf(secretElementPRG);
  result[indexOfElementPRG] = '..';

  const question = result.join(' ');
  const answer = secretElementPRG;

  return [question, String(answer)];
};
const generateRound = () => {
  const rounds = generateQA();
  return rounds;
};
const calculateProgression = () => {
  const rounds = [];
  const numberOfRounds = 3;

  const gameDescription = 'What number is missing in the progression?';

  for (let i = 0; i < numberOfRounds; i += 1) {
    rounds.push(generateRound());
  }
  return startGame(gameDescription, rounds);
};

export default calculateProgression;
