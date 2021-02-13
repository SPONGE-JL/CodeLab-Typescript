import Skincare from "./types/Skincare";

class Lotion extends Skincare {
  printInfo(): void {
    console.log(
      `${this.name}Lotion (${this.volumeCapa}${this.volumeUnit} / ${this.createDate})`
    );
  }
}

export default Lotion;
