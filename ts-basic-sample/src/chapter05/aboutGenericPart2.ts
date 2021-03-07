const topic = `
---------------------------------------
| Chapter 5.5 | Generic type : part.2 |
---------------------------------------
How can we use generic type in array?

> check this example.

  class MyQueue<T> {
    public queue: T[];

    constructor(data: T) {
      this.queue = new Array<T>();
      this.add(data);
      console.log(\`MyQueue create > typeof data: \${typeof data}\`);
    }

    add = (newData: T): MyQueue<T> => {
      this.queue.push(newData);
      return this;
    };
  }

  const myQueue = new MyQueue<string>("1st");
  myQueue.add("2nd");
  myQueue.add("3rd");
  myQueue.add("4th");
  myQueue.add("5th");
  console.log(" >> myQueue.queue: ", myQueue.queue);
`;
class MyQueue<T> {
  public queue: T[];

  constructor(data: T) {
    this.queue = new Array<T>();
    this.add(data);
    console.log(`  >> MyQueue has been created > typeof data: ${typeof data}`);
  }

  add = (newData: T): MyQueue<T> => {
    this.queue.push(newData);
    return this;
  };
}

const aboutGenetricPart2 = () => {
  console.log(topic);

  const myQueue = new MyQueue<string>("1st");
  myQueue.add("2nd");
  myQueue.add("3rd");
  myQueue.add("4th");
  myQueue.add("5th");
  console.log("  >> myQueue.queue: ", myQueue.queue);
};

export default aboutGenetricPart2;
