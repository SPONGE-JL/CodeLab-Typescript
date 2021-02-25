const topic = `
--------------------------------
| Chapter 5.2 | Array : part.2 |
--------------------------------
In typescript, Array type can be marked with 'itemType[]'.

> Check this example.

  const numArr: number[] = [1, 2, 3, 4, 5];
  const strArr: string[] = ["Hello,", "workd!"];
`;

const aboutArrayPart2 = () => {
  console.log(topic);

  const numArr: number[] = [1, 2, 3, 4, 5];
  const strArr: string[] = ["Hello,", "workd!"];
  console.log(`  >> numArr: ${numArr}`);
  console.log(`  >> strArr: ${strArr}`);
};

export default aboutArrayPart2;
