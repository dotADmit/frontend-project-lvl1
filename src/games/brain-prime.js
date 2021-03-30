import greeting from '../cli.js';
import {
  getAnswer,
  printRule,
  getRandomNumber,
  printState,
} from '../index.js';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

export default (roundsToWin = 3) => {
  const userName = greeting();
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  printRule(rule);

  let iter = roundsToWin;

  while (iter) {
    iter -= 1;

    const currentNumber = getRandomNumber();
    const correctAnswer = isPrime(currentNumber) ? 'yes' : 'no';
    const userAnswer = getAnswer(currentNumber);
    const answerIsRight = correctAnswer === userAnswer;

    printState(answerIsRight, userAnswer, correctAnswer, userName);

    if (iter === 0) {
      console.log(`Congratulations, ${userName}!`);
    }

    if (!answerIsRight) break;
  }
};
