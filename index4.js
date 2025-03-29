import express from "express";
import bodyParser from "body-parser"; //3.for parsing the body of the request.
import { dirname } from "path";
import { fileURLToPath } from "url";

//2.for importing the __dirname variable.
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); //3.1 for parsing the body of the request.
var bandName = ""; //4.1 for storing the band name.

//5.creating a own middleware function.
function bandNameGenerator(req, res, next) {
  console.log(req.body); //5.1 logging the request body.
  bandName = req.body["street"] + req.body["pet"]; //5.2 creating the band name.
  next(); //5.3 calling the next middleware function.
}
//5.4 adding the middleware function to the app.
app.use(bandNameGenerator); //5.5 this will run for every request.

//1.first thing we do add all route handlers.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});
// Middleware

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
