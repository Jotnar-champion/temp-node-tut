//Much Cleaner and using Promise for fs async operations

const { readFile, writeFile } = require("fs").promises;

//We don't need util also since we can use fs with promises
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//this is async await
const start = async () => {
  try {
    const first = await readFile("./Content/first.txt", "utf-8");
    const second = await readFile("./Content/second.txt", "utf-8");
    await writeFile(
      "./Content/result-mind-grenade.txt",
      `THIS FILE IS BEING CREATED AND FILLED USING AWAIT AND ASYNC: ${first} : ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./Content/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
