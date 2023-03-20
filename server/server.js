const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

app.use(bodyParser.json());

// get request

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});