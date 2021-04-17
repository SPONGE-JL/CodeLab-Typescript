function addEx(x: number): (number) => number {
  return function (y: number): number {
    return x + y;
  };
}

function abcd() {
  console.log("closure");
}

// Closure 란?
// 함수 정의와 함수 호출의 구분이 없다.
// Argurment를 어떻게 받도록 할 것인가에 따라 언어마다 다르다.
// 커링이 가능하게 만드는 함수형 신택스?

// x ~> f ~> g ~> h ~> y
// f => x: T => g => h => y: R

// y = h(g(f(x)))
// y = h * g * f (x)
