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
    <div id="mainHeader" className="jumbotron backPanel">

      <nav className="myNavBar navbar navbar-inverse bg-inverse">
            <div className="navbar-nav">
            <a href="#!" className="brand-logo">NBA CHAMP</a>
            </div>  
      </nav>

        <Link to="/AdminLeague"><span className="myButton" onClick="">League</span></Link>
          <Link to="/AdminTeam"><span className="myButton" onClick="">Team</span></Link>
          <Link to="/AdminPlayer"><span className="myButton" onClick="">Player</span></Link>
        <Link to=""><span className="myButton" onClick="">Admin</span></Link>
       <Link to="/User"><span className="myButton" onClick={this.pathUser}>User</span></Link>
    </div>

    
    {/* This code will dump the correct Child Component    */}
          {this.props.children}
    
</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
