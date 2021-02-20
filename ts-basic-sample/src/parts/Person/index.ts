import APerson from "./APerson";

export default class Person extends APerson {
  favorites: string[] = new Array<string>();

  constructor(
    public name: string,
    public role: number,
    favorites: string[],
    public desc?: string
  ) {
    super(name, role, desc);
    if (favorites && favorites.length > 0)
      for (let f of favorites) this.favorites.push(f);
  }

  addFavorite(favorite: string) {
    if (!favorite || favorite.length === 0)
      throw new Error("Invalid favorite has insulted.");

    this.favorites.push(favorite);
  }

  introduce() {
    console.log(`
    Hello, my name is '${this.name}'
    ${this.desc}
    These are my favorites - ${this.favorites.toString()}
    `);
  }
}
