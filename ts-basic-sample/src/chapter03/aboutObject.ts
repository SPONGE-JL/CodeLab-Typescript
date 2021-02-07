const topic: string = `
----------------------------------------------
| Chapter 3.1 | declare 'object' in typescript |
----------------------------------------------
The 'let' keyword can define and reset the value (valid in block scope).
The 'const' keyword can defind and be immutable the value (valid in block scope).
(e.g) let name [= value]
      const name = immutableValue

The 'object' type can store all type of value in each one key.
The 'type annotaion' can define each variable's type.
(e.g) let varName: Type [= initValue]
`;

const aboutObject = (): void => {
  console.log(topic);

  console.log("> Check this example.");
  let obj: object = { nickname: "SPONGE-JL", position: "Backend" };
  console.log(" -   initial obj = ", obj);
  obj = { name: "Lee, Jeongyeol", Timezone: "GMT+9" };
  console.log(" - redefined obj = ", obj);
};

export default aboutObject;
