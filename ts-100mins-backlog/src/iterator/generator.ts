console.log("init");
function* infiniteSequence() {
  var i = 0;
  while (true) {
    console.log(`i= ${i}`);
    yield i++;
    console.log(`restart!! i= ${i}`);
  }
}
console.log("infiniteSequence created...");
var iterator = infiniteSequence();
console.log("-----");
console.log(iterator.next());
console.log("-----");
console.log(iterator.next());
console.log("-----");
console.log(iterator.next());
console.log("-----");
