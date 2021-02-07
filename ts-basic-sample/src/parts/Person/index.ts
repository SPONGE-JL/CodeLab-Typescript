import APerson from "./APerson";

export default class Person extends APerson {
  favorites: string[] = new Array<string>();

  addFavorite(favorite: string) {
    if (!favorite || favorite.length === 0)
      throw new Error("Invalid favorite has insulted.");

    this.favorites.push(favorite);
  }

  introduce() {
    console.log(`
    Hello, my name is '${this.name}'.
    ${this.desc}
    These are my favorites - ${this.favorites.toString}
    `);
  }
}
