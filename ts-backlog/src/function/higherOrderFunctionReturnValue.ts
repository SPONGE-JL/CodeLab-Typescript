import { func, hoFuncRetFunc } from "./functionSignature";

const inputFunc: func = (num: number): number => {
  console.log(` | (in inputFunc) num: ${num}`);
  return num + 1;
};
const higherOrderFunc: hoFuncRetFunc = (callback: func): func => {
  console.log(` | (in higherOrderFunc) typeof callback: ${typeof callback}`);
  // const innerFunc: func = (x: number): number => callback(x) * 2;
  // return innerFunc;
  return (inputNum: number): number => callback(inputNum) * 2;
};

console.log(" * start");
const outputFunc: func = higherOrderFunc(inputFunc);
console.log(` | (out) typeof outputFunc: ${typeof outputFunc}`);
console.log(` | (out) outputFunc(1): ${outputFunc(1)}`);
console.log(" * done");

/*
 * start
 | (in higherOrderFunc) typeof callback: function
 | (out) typeof outputFunc: function
 | (in inputFunc) num: 1
 | (out) outputFunc(1): 4
 * done
 */
