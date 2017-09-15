// users screen
// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// This is the History component. It will be used to show a log of  recent searches.
var User = React.createClass({
  getInitialState: function() {
  return { searchTerm: "", results: "", history: [], articles: [] };
  },

// The moment the page renders do this....
  componentDidMount: function() {    
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

  // Here we describe this component's render method
  render: function() {    
    return (
      <div className="panel panel-default ">
        <div className="panel-heading">
          <h3 className="panel-title text-center">User stuff goes in here</h3>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = User;