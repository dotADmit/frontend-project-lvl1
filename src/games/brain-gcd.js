import greeting from '../cli.js';
import {
  printRule,
  getRandomNumber,
  getAnswer,
  printState,
  getGreatestCommonDivisior,
} from '../index.js';

export default (roundsToWin = 3) => {
  const userName = greeting();
  const rule = 'Find the greatest common divisor of given numbers.';

  printRule(rule);

  let iter = roundsToWin;

  while (iter) {
    iter -= 1;
    const minOperand = 1;

    const firstOperand = getRandomNumber() + minOperand;
    const secondOperand = getRandomNumber(51) + minOperand;

    const correctAnswer = getGreatestCommonDivisior(firstOperand, secondOperand);
    const userAnswer = getAnswer(`${firstOperand} ${secondOperand}`);
    const answerIsRight = correctAnswer === +userAnswer;

    printState(answerIsRight, userAnswer, correctAnswer, userName);

    if (iter === 0) {
      console.log(`Congratulations, ${userName}!`);
    }

    if (!answerIsRight) break;
  }
};
