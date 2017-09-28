// League

// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../../utils/helpers");

// import {LeagueTableBody} from "./AdminLeague_tablebody";

var LeagueTableRow = require("./AdminLeague_tablebody");

// This is the History component. It will be used to show a log of  recent searches.
var AdminLeague = React.createClass({

  getInitialState: function() {
  return { dbLeague: [], league: [] };
  },

// The moment the page renders do this....
  componentDidMount: function() {
  helpers.getAdminLeague().then(function(response) {
      // console.log(response);
      if (response !== this.state.dbLeague) {
        // console.log("league", response.data);
        this.setState(response.data);
        // console.log(this.state);
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

   // This function will respond to the user input
  timothy: function(event) {
    console.log('hello')
    //this.setState({ term: event.target.value });
  },

  // Here we describe this component's render method
  render: function() {    
    return (
    	<div className="container">
      <div className="panel panel-default backPanel">
        <div className="panel-heading backPanel smallPadding">
          <div className="panel-title text-center backPanel">NBA League Overview</div>
        </div>
      </div>
      



      <table className="table backPanel">
      <thead>
        <tr>
          <th>Team</th>
          <th>points(PPG)</th>
          <th>rebounds(RPG)</th>
          <th>assists(APG)</th>
          <th>blocks(BPG)</th>
          <th>steals(SPG)</th>
          <th>turnovers(TOG)</th>
        </tr>
      </thead>

       <tbody>      

      {this.state.league.map(function(team, i) {
            return (
              <LeagueTableRow data={team} />
            );
          })}

      
      </tbody>
      
      </table>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = AdminLeague;



// <tbody>      

//       {this.state.league.map(function(team, i) {
//             return (
//               <tr key={team.team} value={team.team} >
//                 <td>{team.team}</td>
//                 <td>{team.points.toFixed(1)}</td>
//                 <td>{team.rebounds.toFixed(1)}</td>
//                 <td>{team.assists.toFixed(1)}</td>
//                 <td>{team.blocks.toFixed(1)}</td>
//                 <td>{team.steals.toFixed(1)}</td>
//                 <td>{team.turnovers.toFixed(1)}</td>
//                 </tr>
//             );
//           })}

      
//       </tbody>


// <LeagueTableRow data={this.state.league}/>