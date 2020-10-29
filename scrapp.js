const request = require("request");
const cheerio = require("cheerio");
request(
  "https://webcompletesolutions.com/index.html",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const subtitle = $(".free-consultation-area");
      console.log(subtitle);
    }
  }
);
