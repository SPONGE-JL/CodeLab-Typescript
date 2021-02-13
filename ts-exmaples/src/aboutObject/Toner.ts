import Skincare from "./types/Skincare";

class Toner extends Skincare {
  printInfo(): void {
    console.log(
      `${this.name}Toner (${this.volumeCapa}${this.volumeUnit} / ${this.createDate})`
    );
  }
}

export default Toner;
