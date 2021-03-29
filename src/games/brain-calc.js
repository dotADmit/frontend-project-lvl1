import greeting from '../cli.js';
import {
  printRule,
  calculator,
  getRandomNumber,
  getRandomOperation,
  getAnswer,
  printState,
} from '../index.js';

export default (roundsToWin = 3) => {
  const userName = greeting();
  const rule = 'What is the result of the expression?';

  printRule(rule);

  let iter = roundsToWin;

  while (iter) {
    iter -= 1;

    const firstOperand = getRandomNumber();
    const operator = getRandomOperation();
    let secondOperand = getRandomNumber();

    if (operator === '*') secondOperand %= 10;

    const correctAnswer = calculator(firstOperand, secondOperand, operator);

    const userAnswer = getAnswer(`${firstOperand} ${operator} ${secondOperand}`);

    const answerIsRight = correctAnswer === +userAnswer;

    printState(answerIsRight, userAnswer, correctAnswer, userName);

    if (iter === 0) {
      console.log(`Congratulations, ${userName}!`);
    }

    if (!answerIsRight) break;
  }
};
