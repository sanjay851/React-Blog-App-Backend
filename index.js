const express = require("express");

const app = express();

const dataRouter = require("./Routes/data");

const cors = require("cors");

app.use(cors());

app.use("/api", dataRouter);

app.listen(process.env.PORT || 6000, () => {
  console.log("port is connected");
});