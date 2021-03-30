import greeting from '../cli.js';
import {
  getAnswer,
  printRule,
  getRandomNumber,
  printState,
} from '../index.js';

const getSequence = () => {
  const sequence = [];
  const sequenceLength = getRandomNumber(5) + 4;
  const sequenceStart = getRandomNumber(50);
  const step = getRandomNumber(15);
  sequence[0] = sequenceStart;

  for (let i = 1; i < sequenceLength; i += 1) {
    sequence[i] = sequence[i - 1] + step;
  }

  return sequence;
};

const getQuizAndKey = (sequence) => {
  const result = sequence.slice(0);
  const indexToChange = getRandomNumber(result.length) - 1;

  const answer = result[indexToChange];
  result[indexToChange] = '..';

  return [result, answer];
};

export default (roundsToWin = 3) => {
  const userName = greeting();
  const rule = 'What number is missing in the progression?';

  printRule(rule);

  let iter = roundsToWin;

  while (iter) {
    iter -= 1;

    const [quiz, correctAnswer] = getQuizAndKey(getSequence());
    const userAnswer = getAnswer(quiz.join(' '));
    const answerIsRight = correctAnswer === +userAnswer;

    printState(answerIsRight, userAnswer, correctAnswer, userName);

    if (iter === 0) {
      console.log(`Congratulations, ${userName}!`);
    }

    if (!answerIsRight) break;
  }
};
