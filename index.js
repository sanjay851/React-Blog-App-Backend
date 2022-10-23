const express = require("express");
console.log("Hello Node js");
const app = express();

const DataRouter = require("./Routes/data");

const cors = require("cors")

app.use(cors());
app.use("/api", DataRouter);

app.listen(process.env.PORT || 8050, () => {
  console.log("port is connected");
});