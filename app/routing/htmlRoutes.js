// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

//still needd to make sure if i'm getting it from survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    console.log(path.join(__dirname, "")); 
    console.log(process.cwd());
    console.log(path.join(__dirname, "../public/home.html"))
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};