import Person from "../parts/Person";

const topic: string = `
----------------------------------
| Chapter 3.3 | Object and class |
----------------------------------
The 'class' defined in typescript will be transfiled the javascript object
after complied. Similar to other OOP(Object Oriented Language), the class
can have 'access modifier(default: public)', 'constructor', 'abstract class',
'implements','extends' (also this and super), and 'static'.
`;

const aboutClass = (): void => {
  console.log(topic);

  console.log("> Check this example.");

  const jimmy: Person = new Person("Jack More", 0, "You can call me 'Jimmy");
  jimmy.addFavorite("drawing");
  jimmy.addFavorite("photography");
  jimmy.addFavorite("cycling");
  jimmy.introduce();
};

export default aboutClass;
