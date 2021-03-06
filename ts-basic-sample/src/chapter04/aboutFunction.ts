const headTopic: string = `
--------------------------
| Chapter 4.1 | function |
--------------------------
* These declares have all same result.

 1) function printOnFunction(str: string): void {
      console.log(str);
    }
 2) const printOnArrowFunction = (str: string): void => {
      console.log(str);
    };
 3) const printOnFunctionSignature: (string) => void = (str: string) => {
      console.log(str);
    };

> Check this example.
`;

const tailTopic: string = `
* We can set the function signiture in 'type' keyword.

 4) type funcSign = (str: string) => void;
    const printOnType: funcSign = (str: string) => {
      console.log(str);
    };

> Check this example.
`;

const aboutFunction = (): void => {
  console.log(headTopic);

  function printOnFunction(str: string): void {
    console.log(str);
  }
  const printOnArrowFunction = (str: string): void => {
    console.log(str);
  };
  const printOnFunctionSignature: (string) => void = (str: string) => {
    console.log(str);
  };
  printOnFunction(' 1) Declared with "function" keyword.');
  printOnArrowFunction(' 2) Declared with "arrow function" keyword. [()=>{}]');
  printOnFunctionSignature(' 3) Declared with "function signiture".');

  console.log(tailTopic);

  type funcSign = (str: string) => void;
  const printOnType: funcSign = (str: string) => {
    console.log(str);
  };
  printOnType(' 4) Declared with "type" keyword');
};

export default aboutFunction;
