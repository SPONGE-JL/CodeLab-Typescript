const topic = `
---------------------------------------
| Chapter 5.4 | Generic type : part.1 |
---------------------------------------
A major part of software engineering is building components that not only have
well-defined and consistent APIs, but are also reusable. Components that are
capable of working on thr data of today as well as the data of tomorrow will
give ypu the most flexible capabilities for building up large software systems.

In language like C# and Java, one of the main tools in the toolbox for creating
reusable components is 'generics', that is, being able to create a component that
cat work over a variety of types rather than a single one.

> check this example.

  function identity<T>(arg: T): T {
    return arg;
  }

  let output1 = identity<string>("myString");
  //        ^ = let output1: string

  let output2 = identity("myString");
  //        ^ = let output2: string
  // Automatical type inference
`;
const aboutGenetricPart1 = () => {
  console.log(topic);

  function identity<T>(arg: T): T {
    return arg;
  }

  let output1 = identity<string>("myString");
  //        ^ = let output1: string

  let output2 = identity("myString");
  //        ^ = let output2: string
  // Automatical type inference

  console.log(`  >> output1 === output2 : ${output1 === output2}`);
};

export default aboutGenetricPart1;
