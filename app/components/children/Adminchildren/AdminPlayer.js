// Player

// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../../utils/helpers");

// This is the AdminPlayer component. It will be used to view and modify players
var AdminPlayer = React.createClass({
  getInitialState: function() {
  return { dbPLayers: [], onePlayer:[] };
  },

// The moment the page renders do this.......
  componentDidMount: function() {
    helpers.getOnePlayer().then(function(response) {
      console.log(response);
      if (response !== this.state.onePlayer) {
        console.log("onePlayer", response.data);
        this.setState({ onePlayer: response.data });
      }
    }.bind(this));    
  },

  // getOnePlayer: function() {
  //   helpers.getOnePlayer().then(function(response) {
  //     console.log(response);
  //     if (response !== this.state.onePlayer) {
  //       console.log("onePlayer", response.data);
  //       this.setState({ onePlayer: response.data });
  //     }
  //   }.bind(this));
  // }, 

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
    	<div className="container">
      <div className="panel panel-default ">
        <div className="panel-heading">
          <h3 className="panel-title text-center">AdminPlayer stuff goes here</h3>
        </div>
      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = AdminPlayer;