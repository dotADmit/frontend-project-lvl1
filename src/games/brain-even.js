import greeting from '../cli.js';
import {
  getAnswer,
  printRule,
  getRandomNumber,
  printState,
} from '../index.js';

export default (roundsToWin = 3) => {
  const userName = greeting();
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  printRule(rule);

  let iter = roundsToWin;

  while (iter) {
    iter -= 1;

    const currentNumber = getRandomNumber();
    const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';

    const userAnswer = getAnswer(currentNumber);

    const answerIsRight = correctAnswer === userAnswer;

    printState(answerIsRight, userAnswer, correctAnswer, userName);

    if (iter === 0) {
      console.log(`Congratulations, ${userName}!`);
    }

    if (!answerIsRight) break;
  }
};
