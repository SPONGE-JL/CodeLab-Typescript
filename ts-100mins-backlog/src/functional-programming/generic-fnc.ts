interface canToString {
  a: string;
}

const generic = (thing: string) => {
  console.log(thing);
};

const generic2 = <canToString>(thing: canToString) => {
  console.log(thing);
};

type canTo = string;

const generic2_1 = <canTo>(thing: canTo) => {
  console.log(thing);
};

const generic3 = <T>(thing: T): T => {
  console.log(thing);
  return thing;
};

generic("abcd");
generic2({ a: "abcd" });
generic2_1("abcd");
generic3("abcd");

((str) => {
  console.log(str);
})("hello!");

type MapFunc<T, R> = (a: T) => R;
type IdentityFunc<T> = MapFunc<T, T>;

const example: MapFunc<string, string> = (a: string): string => `${a}!!!!!`;

const a = example("Oh");
console.log(a);
