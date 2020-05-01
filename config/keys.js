//keys.js logic to determine used keys prod/dev

if (process.env.NODE_ENV === "production") {
  //we are in production mode
  module.exports = require("./prod");
} else {
  //we are in developement mode
  module.exports = require("./dev");
}
