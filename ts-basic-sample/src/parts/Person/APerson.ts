import IPerson from "./IPerson";

export default abstract class APerson implements IPerson {
  // Define abstract fields
  abstract favorites: string[];
  abstract addFavorite(favorite: string);
  abstract introduce();

  // Implement IPerson
  constructor(public name: string, public role: number, public desc?: string) {}
}
