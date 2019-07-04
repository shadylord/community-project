const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { notFound, errorHandler } = require("../middleware/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening to port ${port}.`));
