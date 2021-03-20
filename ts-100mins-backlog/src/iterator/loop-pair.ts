function* waiting() {
  let people = 0;
  while (true) {
    console.log(`새 손님이 오셨습니다. (${++people}번째)`);
    yield people;
  }
}

function* entering() {
  let customer = 0;
  while (true) {
    console.log(` ${++customer}번째 입장하셨습니다.`);
    yield customer;
  }
}

const waitState = waiting();
const cafeState = entering();

const waitings: number[] = [];
const cafeteria: number[] = [];

waitings.push(waitState.next().value || -1);
waitings.push(waitState.next().value || -1);
waitings.push(waitState.next().value || -1);
waitings.push(waitState.next().value || -1);
console.log("🚀 ~ waitings", waitings);

cafeteria.push(cafeState.next().value || -1);
cafeteria.push(cafeState.next().value || -1);
cafeteria.push(cafeState.next().value || -1);
cafeteria.push(cafeState.next().value || -1);
console.log("🚀 ~ cafeteria", cafeteria);

waitings.pop();
waitings.pop();
waitings.pop();
waitings.pop();
console.log("🚀 ~ waitings", waitings);
