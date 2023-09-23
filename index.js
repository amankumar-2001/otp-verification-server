require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbconfig = require("./db");
const app = express();

const userRoute = require("./routes/usersRoute");

app.use(cors());
app.use(express.json());

app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send(`I'm ON...`);
});

const PORT = process.env.PORT || 5050;
app.listen(PORT);
