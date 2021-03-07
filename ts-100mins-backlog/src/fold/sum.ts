import { fold } from ".";

const numArr: number[] = [1, 2, 3, 4, 5];
console.log("🚀 ~ numArr", numArr);

const add = (result: number, value: number): number => result + value;
const sum = fold(numArr, add, 0);
console.log("🚀 ~ sum", sum);
