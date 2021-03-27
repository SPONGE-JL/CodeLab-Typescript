import { readFile } from "fs/promises";
try {
  const fileName = "./package.json";
  const controller = new AbortController();
  const signal = controller.signal;
  readFile(fileName, { signal });
  console.log("successfully deleted /tmp/hello");
} catch (error) {
  console.error("there was an error:", error.message);
}
