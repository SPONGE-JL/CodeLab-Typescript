const topic: string = `
-----------------------------------
| Chapter 4.2 | callback function |
-----------------------------------
The 'first-class function' is that the function is same with object (just value) on
type signature. And the 'lazy evaluation' can make 'callback function' working lazy.
After all, the functions are built on 'higher order function'.

> Check this example.

  type cbfnc = (string, number) => string;
  const callback: cbfnc = (str: string, num: number) => {
    return \`String: \${str} / Number: \${num}\`;
  };

  type hofnc = (cbfnc) => void;
  const higherOrderFunction: hofnc = (fieldFunc: cbfnc) => {
    console.log(fieldFunc("ABCD", 1234));
  };

  higherOrderFunction(callback);
`;

const aboutCallbackFunction = (): void => {
  console.log(topic);

  type cbfnc = (string, number) => string;
  const callback: cbfnc = (str: string, num: number) => {
    return `  // Finally called! > String: ${str} / Number: ${num}`;
  };

  type hofnc = (cbfnc) => void;
  const higherOrderFunction: hofnc = (fieldFunc: cbfnc) => {
    console.log(fieldFunc("ABCD", 1234));
  };

  higherOrderFunction(callback);
};

export default aboutCallbackFunction;
