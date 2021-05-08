import * as R from "ramda";

const group1 = [1, 2, 3];
const group2 = [10, 20, 30];

const resGroup = R.chain(
  (n) => R.chain((m) => [[n + 5, m * 10]], group2),
  group1
);
console.log("🚀 ~ resGroup", resGroup);
// [
//   [6, 100],
//   [6, 200],
//   [6, 300],
//   [7, 100],
//   [7, 200],
//   [7, 300],
//   [8, 100],
//   [8, 200],
//   [8, 300],
// ];

type myType = string | string[] | number | number[];

const myVar1: myType = ["1"];
const myVar2: myType = "1";
const myVar3: myType = [1];
const myVar4: myType = 1;

type t1 = {
  a: string;
};

type t2 = {
  b: number;
};

const myVar5: t1 & t2 = {
  a: "1",
  b: 2,
};
