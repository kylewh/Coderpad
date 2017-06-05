const express = require("express");
const router = express.Router();
const AV = require("leanengine");
const axios = require("axios");
const path = require("path");

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || "Cct4URhkJo6VKYACsR3MklFt-gzGzoHsz",
  appKey: process.env.LEANCLOUD_APP_KEY || "BeJzllYAryhOzoNX0piav8tw",
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || "U5jcAlilltDr1vJmyfwIqC2D"
});

const app = express();
app.use(AV.express());
app.use(express.static(path.resolve(__dirname, "./dist")));

const V2EX_BASE_URL = "https://www.v2ex.com/api";
// v2ex topic
app.get("/news/v2ex/topics/show.json?", function(req, res) {
  const ret = {
    topicInfo: {},
    replies: []
  };
  let url = "", repliesUrl = "";

  if (req.query.id) {
    const id = req.query.id;
    url = `${V2EX_BASE_URL}/topics/show.json?id=${id}`;
    repliesUrl = `${V2EX_BASE_URL}/replies/show.json?topic_id=${id}`;
    axios
      .get(url)
      .then(res => {
        ret.topicInfo = res.data[0];
        return axios.get(repliesUrl);
      })
      .then(res => {
        ret.replies = res.data;
      })
      .then(() => res.send(ret));
  } else if (req.query["node_name"]) {
    const contentType = req.query["node_name"];
    url = `${V2EX_BASE_URL}/topics/show.json?node_name=${contentType}`;
    axios.get(url).then(response => res.send(response.data));
  }
});

// v2ex hot
app.get("/news/v2ex/topics/hot.json", function(req, res) {
  const url = `${V2EX_BASE_URL}/topics/hot.json`;
  axios.get(url).then(response => res.send(response.data));
});

// v2ex latest
app.get("/news/v2ex/topics/latest.json", function(req, res) {
  const url = `${V2EX_BASE_URL}/topics/latest.json`;
  axios.get(url).then(response => res.send(response.data));
});

app.use("^(?!.*?topics).*$", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist/index.html"));
});
// app.listen(process.env.LEANCLOUD_APP_PORT);
app.listen(3000);
console.log("Server started");
