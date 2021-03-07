import { numArrOnetoHundred } from "./common";

console.log("🚀 ~ numArrOnetoHundred", numArrOnetoHundred);

const filter = <T>(array: T[], folding: (value: T) => boolean): T[] => {
  let result: T[] = [];
  for (let index: number = 0; index < array.length; index++) {
    const value: T = array[index];
    if (folding(value)) result = [...result, value];
  }
  return result;
};

const isOdd = (value: number): boolean => value % 2 === 1;

const oddNumArr = filter(numArrOnetoHundred, isOdd);
console.log("🚀 ~ oddNumArr", oddNumArr);
