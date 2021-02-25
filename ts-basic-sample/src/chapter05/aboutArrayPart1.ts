const topic: string = `
--------------------------------
| Chapter 5.1 | Array : part.1 |
--------------------------------
The 'Array' type is part of the javascript standard inner object type. It can be used
to create an array that has associcated same type. For example, the 'String' type is
array of character. So 'split(<string>)' function can split the object of String type.

> Check this example.

  const welcomeMsg: string = "Hello, world!";
  const splitMsg: string[] = welcomeMsg.split(" ");
`;

const aboutArrayPart1 = () => {
  console.log(topic);

  const welcomeMsg: string = "Hello, world!";
  console.log(` >> Array.isArray(welcomeMsg): ${Array.isArray(welcomeMsg)}`);
  console.log(` >> welcomeMsg: ${welcomeMsg}\n`);

  const splitMsg: string[] = welcomeMsg.split(" ");
  console.log(` >> Array.isArray(splitMsg): ${Array.isArray(splitMsg)}`);
  console.log(` >> splitMsg[0]: ${splitMsg[0]}`);
  console.log(` >> splitMsg[1]: ${splitMsg[1]}`);
};

export default aboutArrayPart1;
