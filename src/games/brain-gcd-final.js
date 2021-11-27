import game from '../index.js';

const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);
const getGameData = () => {
  const num = getRandomNumber();
  const num1 = getRandomNumber();
  const answer = [];
  const question = `${num} ${num1}`;
  for (let i = 1; i <= num || i <= num1; i += 1) {
    if (num % i === 0 && num1 % i === 0) {
      answer.push(i);
    }
  }
  return [question, String(answer[answer.length - 1])];
};
const brainGcd = () => game(getGameData);
export default brainGcd;
