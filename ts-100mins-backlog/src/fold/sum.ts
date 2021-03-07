import { numArrOnetoHundred } from "./common";

console.log("🚀 ~ numArrOnetoHundred", numArrOnetoHundred);

const simpleFold = <T>(
  range: T[],
  folding: (result: T, value: T) => T,
  initValue
): T => {
  let result: T = initValue;
  for (let value of range) result = folding(result, value);
  return result;
};

const add = (result: number, value: number): number => result + value;

const sum = simpleFold(numArrOnetoHundred, add, 0);
console.log("🚀 ~ sum", sum);
