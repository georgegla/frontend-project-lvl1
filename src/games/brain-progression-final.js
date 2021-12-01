import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGameData = () => {
  console.log('What number is missing in the progression?');
  const result = [];
  const element = getRandomNumber(1, 9);
  let num = getRandomNumber(0, 21);
  result.push(num);
  const lengthProgression = 8;
  for (let i = 0; i <= lengthProgression; i += 1) {
    num += element;
    result.push(num);
  }
  const value = (result[Math.floor(Math.random() * result.length)]);
  const index = result.indexOf(value);
  result[index] = '..';
  const question = result.join(' ');
  const answer = value;
  return [question, String(answer)];
};
const brainPrg = () => startGame(getGameData);
export default brainPrg;
