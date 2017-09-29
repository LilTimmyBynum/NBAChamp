// Team
// const photo = require("./Blazers.png");

// const tempPath = "../../../../public/images/NBA_Logos/Knicks.png";
// console.log(tempPath);
// const photo = require(tempPath);
// const myTeam = "Knicks";

// const photo = require("../../../../public/images/NBA_Logos/Knicks.png");
// console.log(photo);

var Logos = require("./AdminTeamLogo.js");

// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../../utils/helpers");

// This is the History component. It will be used to show a log of  recent searches.
var AdminTeam = React.createClass({
  getInitialState: function() {
  return { dbTeam: [], teamPick: "" };
  },

// The moment the page renders do this....
  componentDidMount: function() {
  // helpers.getAdminTeam().then(function(response) {
  //     console.log(response);
  //     if (response !== this.state.dbTeam) {
  //       console.log("dbTeam", response.data);
  //       console.log("players", response.data.players);
  //       this.setState({dbTeam: response.data.players});
  //       console.log(this);
  //     }
  //   }.bind(this));    
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

  // gets the team as 'data' from the Logos child component
  getData: function(data){
    this.setState({childData: data});
    console.log(data);

    helpers.getAdminTeam(data).then(function(response) {
      console.log(response);
      if (response !== this.state.dbTeam) {
        console.log("dbTeam", response.data);
        console.log("players", response.data.players);
        this.setState({dbTeam: response.data.players});
        console.log(this);
      }
    }.bind(this));
  },

  // Here we describe this component's render method
  render: function() {    
    return (
    	<div className="sameContainer container-fluid">
      <div className="panel panel-default backPanel">
        <div className="panel-heading backPanel smallPadding">
          <div className="panel-title text-center backPanel">Choose an NBA Team</div>
        </div>

        <div align="center">
          <Logos sendData={this.getData}/>
        </div>

      </div>

      <h3>{this.state.childData}</h3>
      <table className="table backPanel">
      <thead>
        <tr>
          <th>player</th>
          <th>status</th>
          <th>position</th>
          <th>experience</th>
          <th>points(PPG)</th>
          <th>rebounds(RPG)</th>
          <th>steals(SPG)</th>
          <th>turnovers(TOG)</th>
        </tr>
      </thead>
      <tbody>   

      {this.state.dbTeam.map(function(player, i) {
            return (
              <tr key={player.name} value={player.name}>
                <td>{player.name}</td>
                <td>{player.status}</td>
                <td>{player.position}</td>
                <td>{player.experience}</td>
                <td>{player.ppg}</td>
                <td>{player.rpg}</td>
                <td>{player.steals}</td>
                <td>{player.turnovers}</td>
                </tr>
            );
          })}

      
      </tbody>
      </table>




      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = AdminTeam;