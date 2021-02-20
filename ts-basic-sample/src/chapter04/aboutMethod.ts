const topic: string = `
----------------------------------
| Chapter 4.1 | class and method |
----------------------------------
The 'class' can be allocated 'instance' with the keyword 'new'. And the instance
can point itself with the keyword 'this'. But the 'function' can't do it. Why?

When the class (has some methods and field variables) is allocated with an instnace,
the instance's type is object of javascript.The object type can embed the function,
the same, instance(this) created from class can have funtions declared as 'method'.

> Check this example.
`;

const aboutMethod = (): void => {
  console.log(topic);
};

export default aboutMethod;
