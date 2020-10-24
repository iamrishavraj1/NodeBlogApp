const express = require("express"); //Requires Express.
const bodyParser = require("body-parser"); //Require Body-Parser.
const ejs = require("ejs"); //Require EJS.



const app = express(); //Express App.


const everyPost = [];

app.set("view engine", "ejs"); //EJS App.

app.use(bodyParser.urlencoded({ extended: true })); //Body-Parser App.


app.use(express.static("public")); //Public App for Static Files.



//Get Request to Server.
app.get("/", function (req, res) {
  res.render("blog")
});

// Get Response to Posts.
app.get("/posts", function (req, res) {
    res.render("posts",{
        userPosts: everyPost
    });
});
//Post Request.
app.post("/", function (req, res) {
    const posts = {
        title: req.body.postTitle,
        content: req.body.postText
    };

    everyPost.push(posts);
    res.redirect("/posts")
});






//Server Starting on 3000 port.
app.listen(3000, function () {
    console.log("Server Start on port 3000 ");
});
