const puppeteer = require("puppeteer");

console.log("init");
(async () => {
  console.log(1);
  setTimeout(() => {
    console.log(">> init inner");
  }, 1000);

  const browser = await puppeteer.launch();
  console.log(">> browser launched");

  const page = await browser.newPage();
  console.log(3);
  setTimeout(() => {
    console.log(">> new page");
  }, 1000);

  await page.goto("https://example.com");
  console.log(4);
  setTimeout(() => {
    console.log(">> go to");
  }, 1000);

  await page.screenshot({ path: "example1.png" });
  console.log(5);
  setTimeout(() => {
    console.log(">> screenshoot");
  }, 1000);

  await browser.close();
  console.log(6);
  setTimeout(() => {
    console.log(">> close");
  }, 1000);
})();
console.log("done");
