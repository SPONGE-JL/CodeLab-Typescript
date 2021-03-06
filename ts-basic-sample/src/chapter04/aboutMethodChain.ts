const topic: string = `
------------------------------
| Chapter 4.3 | method chain |
------------------------------
The class can be instance with 'new' keyword, and the instance is object.
On the other hands, the method in class can return itself with 'this' keyword.
The method of class will init to function when the class is initiated.
Therefore the function return object(itself), that can be call function too!
This is called 'method chain'.

> Check this example.
`;

class Citizen {
  private name: string | undefined;
  private age: number | undefined;
  private married: boolean | undefined;

  constructor() {}

  setName(name: string): Citizen {
    this.name = name;
    return this;
  }

  setAge(age: number): Citizen {
    this.age = age;
    return this;
  }

  setMarried(married: boolean): Citizen {
    this.married = married;
    return this;
  }

  info(): void {
    const isValid = this.name && this.age;
    if (!isValid) {
      console.log(
        " >> Invalid to print info: check this - ",
        JSON.stringify(this)
      );
    }
    const marry: string = this.married ? "married" : "single";
    console.log(` >> ${this.name}(${this.age}) - ${marry}`);
  }
}

const aboutMethodChain = (): void => {
  console.log(topic);

  const jimmy: Citizen = new Citizen();
  console.log(" >>", jimmy);
  jimmy.setName("Jackson").setAge(28).setMarried(false);
  console.log(" >>", jimmy);
  jimmy.info();
};

export default aboutMethodChain;
