import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const calcProgression = (num, element, lengthProgression) => {
  const result = [];
  let num1 = num;
  result.push(num);
  for (let i = 0; i <= lengthProgression; i += 1) {
    num1 += element;
    result.push(num1);
  }
  return result;
};
const getGameData = () => {
  console.log('What number is missing in the progression?');
  const element = getRandomNumber(1, 9);
  const num = getRandomNumber(0, 21);
  const lengthProgression = 8;
  const result = calcProgression(num, element, lengthProgression);
  const value = (result[Math.floor(Math.random() * result.length)]);
  const index = result.indexOf(value);
  result[index] = '..';
  const question = result.join(' ');
  const answer = value;
  return [question, String(answer)];
};
const calculateProgression = () => startGame(getGameData);
export default calculateProgression;
