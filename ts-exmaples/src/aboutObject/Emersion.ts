import Skincare from "./types/Skincare";

class Emersion extends Skincare {
  printInfo(): void {
    console.log(
      `${this.name}Emersion (${this.volumeCapa}${this.volumeUnit} / ${this.createDate}) --> ${this.reviewPoint}`
    );
  }
}

export default Emersion;
