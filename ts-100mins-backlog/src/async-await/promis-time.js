const wait = (ms) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("called");
      resolve();
    }, ms)
  );

wait(1000).then(() => console.log("resolve -> then"));
