import readlineSync from 'readline-sync';
import greeting from './cli.js';
import getRandomNumber from './utilites.js';

const printRule = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const gameLogic = () => {
  const number = getRandomNumber();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
  const answerIsRight = correctAnswer === userAnswer;

  console.log(answerIsRight ? 'Correct' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);

  return answerIsRight;
};

export default (roundsToWin = 3) => {
  const userName = greeting();

  printRule();

  let iter = roundsToWin;

  while (iter) {
    const answerIsRight = gameLogic();

    if (!answerIsRight) break;

    iter -= 1;
  }

  if (iter === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};
