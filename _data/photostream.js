const fetch = require("node-fetch");

module.exports = async function () {
  return fetch("https://api.andersos.net/photostream.json")
    .then((res) => res.json())
    .then((photostream) => photostream.photos);
};
