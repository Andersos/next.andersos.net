const fetch = require("node-fetch");

module.exports = async function () {
  return fetch("https://api.andersos.net/movies.json")
    .then((res) => res.json())
    .then((movies) => movies);
};
