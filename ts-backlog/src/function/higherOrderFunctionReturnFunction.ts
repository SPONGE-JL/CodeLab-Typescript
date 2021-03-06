import { func, hoFunc } from "./functionSignature";

// Simple funciton
const plusOne: func = (num: number) => {
  const fncResult = num + 1;
  console.log(` | (in plusOne) fncResult: ${fncResult}`);
  return fncResult;
};

// Higher-order function
const makeTwo: hoFunc = (callback: func) => {
  const insideOne = 1;
  console.log(` | (in makeTwo) insideOne: ${insideOne}`);

  // Paramater 'cb' has been called in higher-order function scope,
  // so we can call it 'Callback function'
  const result = callback(insideOne);
  console.log(` | (in makeTwo) result: ${result}`);
  return result;
};

console.log(" * start");
makeTwo(plusOne);
console.log(" * done");

/*
 * start
 | (in makeTwo) insideOne: 1
 | (in plusOne) fncResult: 2
 | (in makeTwo) result: 2
 * done
 */
