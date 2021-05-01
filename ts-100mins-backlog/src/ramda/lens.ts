import * as R from "ramda";

const nameKey = "name";

type Man = {
  [nameKey]: string;
};

type Store = {
  [nameKey]: string;
};

const makeLens = (propsName: string) =>
  R.lens(R.prop(propsName), R.assoc(propsName));

const getter = (lens) => R.view(lens);
const setter = (lens) => <T>(newValue: T) => R.set(lens, newValue);
const setterUsingFunc = (lens) => <T, R>(func: (T) => R) => R.over(lens, func);

// Use
const nameLens = makeLens(nameKey);
const getName = getter(nameLens);
const setName = setter(nameLens);
const setNameUsingFnc = setterUsingFunc(nameLens);

const user: Man = {
  [nameKey]: "유리",
};

const subway: Store = {
  [nameKey]: "서브웨이",
};

const oldUserName = getName(user);
console.log("🚀 ~ oldUserName", oldUserName);

const subwayName = getName(subway);
console.log("🚀 ~ subwayName", subwayName);

const newUser = setName("민수")(user);
const newUserName = getName(newUser);
console.log("🚀 ~ newUserName", newUserName);
