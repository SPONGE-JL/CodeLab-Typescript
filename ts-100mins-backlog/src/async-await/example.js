const puppeteer = require("puppeteer");

const now = () => new Date();

const wait = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(now(), `timeout! ${ms}`);
      resolve();
    }, ms)
  );
};

console.log(now(), "init");
(async () => {
  console.log(now(), ">> init inner");
  await wait(1000);

  const browser = await puppeteer.launch();
  console.log(now(), ">> browser launched");
  await wait(1000);

  const page = await browser.newPage();
  console.log(now(), ">> new page");
  await wait(1000);

  await page.goto("https://example.com");
  console.log(now(), ">> go to");
  await wait(1000);

  await page.screenshot({ path: "example1.png" });
  console.log(now(), ">> screenshoot");
  await wait(1000);

  await browser.close();
  console.log(now(), ">> close");
  await wait(1000);
})();
console.log(now(), "done");
