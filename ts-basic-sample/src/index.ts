import Chapter03 from "./chapter03";

console.log("Typescript Basic Sample Package");
console.log("-------------------------------");

const chNum = process.argv.slice(2);
console.log(`>> Selected chNum: ${chNum}`);

switch (Number(chNum[0])) {
  case 3:
    Chapter03.explain();
    break;

  default:
    console.log("[error] Nothing to run..");
}
