//Tämä on pääsovellus 
const express = require('express');
const fs = require("fs");
const app = express(); 
const PORT = 8080;

//default home page
/*
app.use("/", (req, res) => {
  res.send("Default page");
});
*/

//Read exist file path, and fs will consider the exist it
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/video", function (req, res) {
  // Ensure there is a range given for the video
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  // get video stats (about 61MB) & videoname
  // fs.statsynch method used synchronously information given file path & returned several field and get more details about the file
  const videoPath = "soul.mp4";
  const videoSize = fs.statSync("soul.mp4").size;

  // Parse Range
  // Example: "bytes=32324-"
  //10 ** 6 = 1MB 
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, "")); 
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  const videoStream = fs.createReadStream(videoPath, { start , end });

  videoStream.pipe(res);

});


//antaa toistaa video tiedoston, mikäli on olemassa
/*
app.get('/video', (req, res) => {
    res.sendFile('soul.mp4', { root: __dirname });
});
*/


app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
