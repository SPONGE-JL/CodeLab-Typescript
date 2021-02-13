import Cosmetic from "./Cosmetic";

abstract class BaseMakeup implements Cosmetic {
  constructor(
    public name: string,
    public createDate: string,
    public volumeCapa: number = 0,
    public volumeUnit: string = "ml",
    public reviewPoint: number = 5,
    public color: string = ""
  ) {}

  abstract printInfo(): void;

  setReviewPoint(point: number): void {
    this.reviewPoint = point;
  }

  setColor(color: string): void {
    this.color = color;
  }
}

export default BaseMakeup;
