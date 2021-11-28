import game from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 21) + 1;
const getRandomNumber1 = () => Math.floor(Math.random() * 9) + 1;
const getGameData = () => {
  console.log('What number is missing in the progression?');
  const result = [];
  const d = getRandomNumber1();
  let num = getRandomNumber();
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
const brainpPrg = () => game(getGameData);
export default brainpPrg;
