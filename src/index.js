import readlineSync from 'readline-sync';

export const printRule = (rule) => console.log(rule);

export const printState = (isCorrect, userAnswer, correctAnswer, userName) => {
  let state = 'Correct!';
  if (!isCorrect) state = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  console.log(state);
};

export const getRandomNumber = (maxNumber = 100) => Math.floor(Math.random() * maxNumber);

export const getAnswer = (num) => readlineSync.question(`Question: ${num}\nYour answer: `);

export const getRandomOperation = () => {
  const operations = ['+', '-', '*'];

  return operations[getRandomNumber(operations.length)];
};

export const calculator = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown sign state: '${operator}'!`);
  }
};

export const getGCD = (a, b) => {
  if (b === a) return a;

  const small = a > b ? b : a;
  const big = a > b ? a : b;

  if (big % small === 0) return small;

  for (let i = Math.floor(small / 2); ; i -= 1) {
    if (big % i === 0 && small % i === 0) return i;
  }
};
