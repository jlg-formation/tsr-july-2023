var express = require("express");
var serveIndex = require("serve-index");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req: ", req.method, req.ur1);
  next();
});

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
