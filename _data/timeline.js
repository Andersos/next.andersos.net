const fetch = require("node-fetch");

module.exports = async function () {
  return fetch("https://api.andersos.net/timeline.json")
    .then((res) => res.json())
    .then((timeline) => timeline);
};
