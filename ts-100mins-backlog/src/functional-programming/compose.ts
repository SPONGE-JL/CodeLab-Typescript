import * as R from "ramda";

const plus1 = (x: number) => x + 1;

const resultWhat = plus1(plus1(plus1(plus1(plus1(0)))));
console.log("🚀 ~ resultWhat", resultWhat);

const resultRamda = R.compose(
  plus1,
  R.tap((n) => console.log(`tap-${n}`, n)),
  plus1,
  R.tap((n) => console.log(`tap-${n}`, n)),
  plus1,
  R.tap((n) => console.log(`tap-${n}`, n))
);
console.log("🚀 ~ resultRamda", resultRamda);

const arrs = R.range(1, 5); // 1 <= x < 5
const resultArr = R.pipe(
  R.map(R.add(1)), //
  R.map(R.add(-20)) //
)(arrs);
console.log("🚀 ~ arrs", arrs);
console.log("🚀 ~ resultArr", resultArr);
