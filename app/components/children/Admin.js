// admin screen
var React = require("react");

// Including the Link component from React Router to navigate within our application without full page reloads
import {Link} from 'react-router';

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// This is the History component. It will be used to show a log of  recent searches.
var Admin = React.createClass({


getInitialState: function() {
    return { dbPlayers: [] };
  },


// The moment the page renders do this.....
  componentDidMount: function() {
    // helpers.getMyPlayers().then(function(response) {
    //   console.log(response);
    //   if (response !== this.state.dbPlayers) {
    //     console.log("dbPlayers", response.data);
    //     this.setState({ dbPlayers: response.data });
    //   }
    // }.bind(this));
  },  



  

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
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


  // Here we describe this component's render method
  render: function() {    
    return (
      <div className="container">
      <div className="jumbotron">
      <div className="panel panel-default ">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Admin stuff goes in here</h3>
          <Link to="/Admin/AdminLeague"><button className="btn btn-primary btn-lg" onClick="">League</button></Link>
          <Link to="/Admin/AdminTeam"><button className="btn btn-danger btn-lg" onClick="">Team</button></Link>
          <Link to="/Admin/AdminPlayer"><button className="btn btn-danger btn-lg" onClick="">Player</button></Link>
        </div>
      </div>
      </div>
      <div>Tim</div>
      {/*    This code will dump the correct Child Component    */}
          {this.props.children}
      <div>Bynum</div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Admin;
