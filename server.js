const express = require("express");

const path = require("path");

const app = express();

app.use(express.static("./dist/Tunos"));

app.get("/*", (req, res) => {
    res.sendFile("index.html", {root: "dist/Tunos"})
})

app.listen(process.env.PORT || 3000);