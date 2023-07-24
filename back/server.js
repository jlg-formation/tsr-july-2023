var express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req: ", req.method, req.url);
  next();
});

app.use(express.static("."));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
