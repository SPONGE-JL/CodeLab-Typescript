export const makeNumArr = (from: number, to: number): number[] =>
  from <= to ? [from, ...makeNumArr(++from, to)] : [];

export const numArrOnetoHundred: number[] = makeNumArr(1, 100);
