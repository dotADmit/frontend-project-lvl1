import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { calculator, getRandomNumber, getRandomOperation } from '../utilites.js';

const printRule = () => console.log('What is the result of the expression?');

const getAnswer = (num) => readlineSync.question(`Question: ${num}\nYour answer: `);

export default (roundsToWin = 3) => {
  const userName = greeting();

  printRule();

  let iter = roundsToWin;

  while (iter) {
    const firstOperand = getRandomNumber();
    const secondOperand = getRandomNumber(15);
    const operator = getRandomOperation();
    const correctAnswer = calculator(firstOperand, secondOperand, operator);

    const userAnswer = getAnswer(`${firstOperand} ${operator} ${secondOperand}`);

    const answerIsRight = correctAnswer === +userAnswer;

    console.log(answerIsRight ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

    if (!answerIsRight) break;

    iter -= 1;
  }

  if (iter === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};
