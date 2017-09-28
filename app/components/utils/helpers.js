// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Our scraping tools
// var request = require("request");
// var cheerio = require("cheerio");
// var cheerio = require("cheerio-react");

const place = "newburgh";

var react = require("react");
var ReactCom = require("react-http-request");
// var scraper = require("scraper");

const news = [];
const articleURL = "http://abc7ny.com/news/";


// Geocoder API
var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

// Helper functions for making API Calls
var helper = {

  scrapeArticles: function() {
      return axios.get(articleURL).then(function(response) {
        // var $ = cheerio.load(response.data);
        console.log("News 7 Data ====>");
        console.log(response.data);   
      });
    },

    addArticletoDb: function() {
      console.log(" ...made it to the helper...");
    },

    adminPath: function() {
      return axios.get("/admin");
    },



 runQuery: function() {
    return axios.get("/news");
  }, 

  // // this get my PLayers from the MySQL db
  // runArticleQuery: function() {
  //   return axios.get("/api");
  // },

  // this gets a League summary for the Admin from the MySQL db
  getAdminLeague: function() {
    return axios.get("/league");
  },

  // this gets a League summary for the Admin from the MySQL db
  getAdminTeam: function(teamdata) {
    console.log("....in helper........");
    console.log(teamdata);
    return axios.get("/team/" + teamdata);
  },

  // this gets all Players from the MySQL db
  getMyPlayers: function() {
    return axios.get("/players");
  },

  // this gets one Player from the MySQL db
  getOnePlayer: function() {
    return axios.get("/oneplayer");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;
