import Person from "../parts/Person";

const topic = `
--------------------------------
| Chapter 5.3 | Array : part.3 |
--------------------------------
In javascript, Array object is working like the 'List' datastructure.

> check this example.

  const jimmy: Person = new Person("Jimmy", 0, []);
  const luccy: Person = new Person("Luccy", 1, []);

  const persons: Person[] = new Array();
  persons.push(jimmy);
  persons.push(luccy);

  const [first, second]: Person[] = persons;

  const popped: Person | undefined = persons.pop();
`;

const aboutArrayPart2 = () => {
  console.log(topic);

  const jimmy: Person = new Person("Jimmy", 0, []);
  const luccy: Person = new Person("Luccy", 1, []);
  console.log("  >> jimmy : ", jimmy);
  console.log("  >> luccy : ", luccy);

  // like list
  const persons: Person[] = new Array();
  persons.push(jimmy);
  persons.push(luccy);

  console.log("\n  >> persons:\n", persons);

  // destructuring allocation
  const [first, second, third]: Person[] = persons;
  console.log("\n  >> first : ", first);
  console.log("  >> second: ", second);
  console.log("  >> third : ", third);

  // like queue
  const popped: Person | undefined = persons.pop();
  console.log("\n  >> popped : ", popped);
};

export default aboutArrayPart2;
