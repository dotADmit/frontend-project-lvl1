export const getRandomNumber = (maxNumber = 100) => Math.floor(Math.random() * maxNumber);

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
