const { people, greeting } = require("./index");
// console.log(greeting);

// const os = require("os");
// console.log(os.platform(), os.totalmem(), os.version(), os.homedir());

const fileSystem = require("fs");
// read files
// fileSystem.readFile("./random.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });
// write files
// const inf = "hello hello";
// fileSystem.writeFile("./random.txt", inf, () => {
//   console.log("file written");
// });

// check if files exist
// if (!fileSystem.existsSync("./temp")) {
//   fileSystem.mkdir("./temp", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fileSystem.rmdir("./temp", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder removed");
//   });
// }
// deleting files
// if (fileSystem.existsSync("./docs/deleteme.txt")) {
//   fileSystem.unlink("./docs/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file removed");
//   });
// }
// 32.50 net ninja node tutorial 2
