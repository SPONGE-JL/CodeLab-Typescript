const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];
console.log("🚀 ~ arr", arr);

const result = arr
  .filter((i: number) => i % 2 == 1)
  .map((i: number) => `${i}번째 입니다.`);
console.log("🚀 ~ result", result);
