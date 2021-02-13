import BaseMakeup from "./types/BaseMakeup";

class CCCream extends BaseMakeup {
  printInfo(): void {
    console.log(`New CCCream! ${this.name} (${this.createDate})!`);
    if (this.color && this.color != "") {
      console.log(`${this.color} has been released!!`);
    }
    console.log("HURRY!!HURRY!!HURRY!!HURRY!!");
  }
}

export default CCCream;
