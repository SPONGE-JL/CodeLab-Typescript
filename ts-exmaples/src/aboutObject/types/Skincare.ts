import Cosmetic from "./Cosmetic";

abstract class Skincare implements Cosmetic {
  constructor(
    public name: string,
    public createDate: string,
    public volumeCapa: number = 0,
    public volumeUnit: string = "ml",
    public reviewPoint: number = 5
  ) {}

  abstract printInfo(): void;

  setReviewPoint(point: number): void {
    this.reviewPoint = point;
  }
}

export default Skincare;
