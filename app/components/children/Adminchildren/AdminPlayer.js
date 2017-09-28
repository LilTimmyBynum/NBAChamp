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

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      //hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );



    return (
    	<div className="container">
      <div className="panel panel-default ">
        <div className="panel-heading">
          <h3 className="panel-title text-center">NBA Player Overview</h3>
        </div>



         
  <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Team</a>

   
  <ul id='dropdown1' className='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li className="divider"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
  </ul>



      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = AdminPlayer;