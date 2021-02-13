interface Cosmetic {
  name: string;
  createDate: string;
  volumeCapa: number;
  volumeUnit: string;
  reviewPoint: number;
  desc?: string;

  printInfo(): void;
  setReviewPoint(point: number): void;
}

export default Cosmetic;
