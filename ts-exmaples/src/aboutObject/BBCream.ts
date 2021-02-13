import BaseMakeup from "./types/BaseMakeup";

class BBCream extends BaseMakeup {
  printInfo(): void {
    console.log(`New BBCream! ${this.name} (${this.createDate})!`);
    if (this.color && this.color != "") {
      console.log(`${this.color} has been released!!`);
    }
  }
}

export default BBCream;
