// admin screen
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// This is the History component. It will be used to show a log of  recent searches.
var Admin = React.createClass({


getInitialState: function() {
    return { searchTerm: "", results: "", history: [], articles: [] };
  },


// The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getMyArticles().then(function(response) {
      console.log(response);
      if (response !== this.state.articles) {
        console.log("Articles", response.data);
        this.setState({ articles: response.data });
      }
    }.bind(this));
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
      <div className="panel panel-default ">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Admin stuff goes in here</h3>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Admin;
