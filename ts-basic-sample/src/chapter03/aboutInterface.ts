import IPerson from "../parts/Person/IPerson";

const explainDetail = () => {
  console.log("> Check this example.");

  let admPerson: IPerson = {
    name: "admin",
    role: 9,
    desc: "This user has administrator role.",
  };
  console.log("admPerson = ", admPerson);

  let newPerson: IPerson = {
    name: "newbie",
    role: 0,
  };
  console.log("newPerson = ", newPerson);

  // * '...' : spread operator
  newPerson = { ...newPerson, desc: "I'm newbie!" };
  console.log("newPerson = ", newPerson);
};

const topic: string = `
---------------------------------------------------
| Chapter 3.2 | What is 'interface'? Why we need? |
---------------------------------------------------
If the 'object' type has define with let keyword,
the object's value can be redefined like 'any' type.
For safety runtime program, we need types in object.
So that the 'interface' keyword can do that.

interface Name {
  propertyKey[?]: propertyType
  readonly propKey: propType 
}

> '?' - Optional property.
> 'readonly' - Not allow to modify
`;

const seeMore: string = `
> See more.. https://www.typescriptlang.org/docs/handbook/interfaces.html;
`;

const aboutInterface = (): void => {
  console.log(topic);
  explainDetail();
  console.log(seeMore);
};

export default aboutInterface;
