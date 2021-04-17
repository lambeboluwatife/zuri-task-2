const http = require("http");
const fs = require("fs");

http.get("http://jsonplaceholder.typicode.com/posts", (res) => {
  res.setEncoding("utf8");
  res.on("data", function (body) {
    // directory path
    const dir = "./result";

    try {
      // first check if directory already exists
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log("Directory is created.");
      } else {
        console.log("Directory already exists.");
      }
    } catch (err) {
      console.log(err);
    }

    // create file

    fs.writeFile("./result/posts.json", body, (err) => {
      if (err) throw err;
      console.log("File Created successfully");
    });
  });
});
