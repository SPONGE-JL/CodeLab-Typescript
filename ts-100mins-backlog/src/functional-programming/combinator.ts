import * as R from "ramda";

const orgArr = [1, 2, 3, 4, 5];

const duplicate = (n) => [n, n];

const flatMap = (fnc) => R.pipe(R.map(fnc), R.flatten);

const resArr = flatMap(duplicate)(orgArr);
console.log("🚀 ~ resArr", resArr);

const resArr2 = R.chain(duplicate, orgArr);
console.log("🚀 ~ resArr2", resArr2);
