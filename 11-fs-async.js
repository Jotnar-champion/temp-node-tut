const { readFile, writeFile } = require("fs");

// Async works with callback it means when functionality is done it would do that just like an eventlistener which is triggered eveytime.
console.log("Starting");
readFile("./Content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error Occured in Reading file ", err);
    return;
  } else {
    // console.log(result)
    const first = result;
    console.log("Reading First file...");
    readFile("./Content/Second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log("Error occuring in reading second file ", err);
      } else {
        const second = result;
        console.log("Reading Second file...");
        writeFile(
          "./Content/result-async.txt",
          `Here is the combined result of both files : ${first},${second}`,
          (err, result) => {
            if (err) {
              console.log("There is error in writing to a file", err);
              return;
            }

            console.log("File Created & data added Sucessfully");
          }
        );
      }
    });
  }
});
console.log("doing next task");
