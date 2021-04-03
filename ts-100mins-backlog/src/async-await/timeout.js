function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

const wait = (ms) => {
  console.log(`await! ${ms} - ${new Date()}`);
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`called ${ms} - ${new Date()}`);
      resolve();
    }, ms)
  );
};

(async () => {
  console.log("init");
  let syncSec = 0;
  let a = 0;
  await wait(1000);
  await wait(2000);
  console.log("before while");
  while (true) {
    console.log(`>> sync ${++syncSec} - ${new Date()}`);
    sleep(500);
    if (++a > 6) break;
  }
  console.log("after while");
  await wait(3000);
  await wait(4000);
  console.log("scope finish");
})();
