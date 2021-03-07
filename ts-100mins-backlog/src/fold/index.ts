export const fold = <T>(
  range: T[],
  folding: (result: T, value: T) => T,
  initValue
): T => {
  let result: T = initValue;
  for (let value of range) result = folding(result, value);
  return result;
};
