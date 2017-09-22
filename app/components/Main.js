// Include React
import React, { Component, PropTypes } from 'react'; 

// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from 'react-router';

// Here we include all of the sub-components
import {Admin} from "./children/Admin";
import {User} from "./children/User";



var HomeTeams = require("./children/HomeTeamCarousel");
var AwayTeams = require("./children/AwayTeamCarousel");
var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

var Myarticles = require("./children/Myarticles");
var Scrape = require("./children/Scrape");
// var Myarticles = require("./children/Myarticles");

// include images
// var Pics = require("../../../public/images/NBA_Logos");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { searchTerm: "", results: "", history: [], articles: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getMyPlayers().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("Players", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  // componentDidUpdate: function() {

  //   // Run the query for the address
  //   helpers.runQuery(this.state.searchTerm).then(function(data) {
  //     if (data !== this.state.results) {
  //       console.log("Address", data);
  //       this.setState({ results: data });

  //       // After we've received the result... then post the search term to our history.
  //       helpers.postHistory(this.state.searchTerm).then(function() {
  //         console.log("Updated!");

  //         // After we've done the post... then get the updated history
  //         helpers.getHistory().then(function(response) {
  //           console.log("Current History", response.data);

  //           console.log("History", response.data);

  //           this.setState({ history: response.data });

  //         }.bind(this));
  //       }.bind(this));
  //     }
  //   }.bind(this));
  // },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },



  // my page scraping function  ....not working
  scrapeSomething: function() {
    helpers.runArticleQuery().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  },

  // // get saved articles from Mongo
  // getMyArticles: function() {
  //   helpers.runArticleQuery().then(function(response) {
  //     console.log(response);
  //     if (response !== this.state.articles) {
  //       console.log("Articles", response.data);
  //       this.setState({ articles: response.data });
  //     }
  //   }.bind(this));
  // },

  // my page scraping function
  getSavedArticles: function() {
    
    // Run the query for the address
    helpers.runQuery(this.state.searchTerm).then(function(data) {
      if (data !== this.state.results) {
        console.log("Address", data);
        this.setState({ results: data });

        // After we've received the result... then post the search term to our history.
        helpers.postHistory(this.state.searchTerm).then(function() {
          console.log("Updated!");

          // After we've done the post... then get the updated history
          helpers.getHistory().then(function(response) {
            console.log("Current History", response.data);

            console.log("History", response.data);

            this.setState({ history: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));

  },

  // function for admin 
  pathAdmin() {
    helpers.runArticleQuery().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  },

  // function for user 
  pathUser() {
    // helpers.runArticleQuery().then(function(response) {
    //   console.log(response);
    //   if (response !== this.state.history) {
    //     console.log("History", response.data);
    //     this.setState({ history: response.data });
    //   }
    // }.bind(this));
  },

 

  // Here we render the function
  render: function() {
    return (
      <div className="container myContainer">
    <div className="jumbotron">
        
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">NBA CHAMP</a>
                <ul className="right hide-on-med-and-down">
                    {/* !-- Dropdown Trigger -->  */}
                    <li><a className="dropdown-button" href="#!" data-activates="dropdown1"><i className="material-icons right">contacts</i></a></li>
                </ul>
            </div>
        </nav>
        <Link to="/Admin"><button className="btn btn-primary btn-lg" onClick="">Admin</button></Link>
       <Link to="/User"><button className="btn btn-danger btn-lg" onClick={this.pathUser}>User</button></Link>
    </div>

    <div>Main</div>
    {/* This code will dump the correct Child Component    */}
          {this.props.children}
    <div>Main</div>
</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
