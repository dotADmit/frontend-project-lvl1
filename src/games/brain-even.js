import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import getRandomNumber from '../utilites.js';

const printRule = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getAnswer = (num) => readlineSync.question(`Question: ${num}\nYour answer: `);

export default (roundsToWin = 3) => {
  const userName = greeting();

  printRule();

  let iter = roundsToWin;

  while (iter) {
    const currentNumber = getRandomNumber();
    const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';

    const userAnswer = getAnswer(currentNumber);

    const answerIsRight = correctAnswer === userAnswer;

    console.log(answerIsRight ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

    if (!answerIsRight) break;

    iter -= 1;
  }

  if (iter === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};
