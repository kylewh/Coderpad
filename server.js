var express = require("express");
var AV = require("leanengine");
const path = require("path");

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || "Cct4URhkJo6VKYACsR3MklFt-gzGzoHsz",
  appKey: process.env.LEANCLOUD_APP_KEY || "BeJzllYAryhOzoNX0piav8tw",
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || "U5jcAlilltDr1vJmyfwIqC2D"
});

var app = express();
app.use(AV.express());
app.use(express.static(path.resolve(__dirname, "./dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist/index.html"));
});
app.listen(process.env.LEANCLOUD_APP_PORT);
console.log("Server started");
