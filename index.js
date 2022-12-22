const express = require("express");
const app = express();
const ejs = require("ejs");
const fs = require("fs");

const port = 3333;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const readFile = fs.readFileSync("postDB.json", "utf-8");
const jsonData = JSON.parse(readFile);

let postArr = [];
postArr = [...jsonData];

// ----------home----------
app.get("/", function (req, res) {
  res.render("pages/index.ejs", { postArr });
});

// ----------create----------
app.post("/create", (req, res) => {
  const post = req.body.post;

  let posts = {};

  let day = new Date();

  let writeY = day.getFullYear();
  let writeM = day.getMonth() + 1;
  let writeD = day.getDate();

  posts.txt = post[0];
  posts.author = post[1];
  posts.date = `${writeY}.${writeM}.${writeD}`;

  postArr.push(posts);

  fs.writeFileSync("postDB.json", JSON.stringify(postArr));

  res.redirect("/");
});

// ----------delete----------
app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  postArr.splice(id, 1);
  fs.writeFileSync("postDB.json", JSON.stringify(postArr));
  res.redirect("/");
});

// ----------listen----------
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
