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
const getGameData = () => {
  console.log('What number is missing in the progression?');
  const differenceOfProgression = getRandomNumber(1, 9);
  const numberOfProgresion = getRandomNumber(0, 21);
  const lengthProgression = 8;
  const result = calcProgression(numberOfProgresion, differenceOfProgression, lengthProgression);
  const secretElementPRG = result[getRandomNumber(0, result.length - 1)];
  const indexOfElementPRG = result.indexOf(secretElementPRG);
  result[indexOfElementPRG] = '..';
  const question = result.join(' ');
  const answer = secretElementPRG;
  return [question, String(answer)];
};
const calculateProgression = () => startGame(getGameData);
export default calculateProgression;
