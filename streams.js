const fs = require("fs");
// make a stream and tell it where to read data from
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
// createwritestream
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// on is an event listner for file system. and data is listnening for everytime we get a buffer so we can use it straight away.
// readStream.on("data", (chunk) => {
//   console.log("--newChunk--");
//   writeStream.write("\n New Chunk \n");
//   writeStream.write(chunk);
//   console.log(chunk);
// });

// piping

readStream.pipe(writeStream);
