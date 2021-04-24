// https://ramdajs.com/docs/#
import * as R from "ramda";

const numbers = R.range(0, 5); // [0, 5) :: half open interval
console.log("🚀 ~ numbers", numbers);

let y = 0;
const results = R.map(
  // Mapping
  R.pipe(
    // each number
    R.tap(console.log),
    (x: number) => {
      console.log("Not pure function", ++y);
      return x + y + 10;
    },
    R.tap(console.log)
  )
)(numbers);
console.log("🚀 ~ results", results);

const pointFreeStyleCode = R.pipe(R.tap(console.log));

const plus = (x, y, z) => x + y + z;
const curried = R.curryN(3, plus);
console.log(plus(1, 2, 3) === curried(1)(2)(3));

const morePlus = R.add(1);
const plusRes = morePlus(2);
console.log("🚀 ~ plusRes", plusRes);

const plusMap = R.map(R.add(1))(R.range(0, 5));
console.log("🚀 ~ plusMap", plusMap);
// � ~ plusRes 3

const indexedMap = R.addIndex<number>(R.map);
const indexedRes = indexedMap((value, index) => {
  console.log("value", value, "index", index);
  return R.add(1)(value);
}, R.range(0, 5));
console.log("🚀 ~ indexedRes", indexedRes);
// value 0 index 0
// value 1 index 1
// value 2 index 2
// value 3 index 3
// value 4 index 4
// � ~ indexedRes [ 1, 2, 3, 4, 5 ]

// flip(f(x, y)) ==> f(y, x)
