import game from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getGameData = () => {
  console.log('What number is missing in the progression?');
  const result = [];
  const d = getRandomNumber(1, 9);
  let num = getRandomNumber(0, 21);
  result.push(num);
  for (let i = 0; i <= 8; i += 1) {
    num += d;
    result.push(num);
  }
  const randomValueArray = Math.floor(Math.random() * result.length);
  const value = (result[randomValueArray]);
  const index = result.indexOf(result[randomValueArray]);
  result[index] = '..';
  const question = result.join(' ');
  const answer = value;
  return [question, String(answer)];
};
const brainPrg = () => game(getGameData);
export default brainPrg;
