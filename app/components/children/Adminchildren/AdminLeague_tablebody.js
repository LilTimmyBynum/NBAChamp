// AdminLeague table body



// Include React
var React = require("react");


var LeagueTableRow = React.createClass({

  getInitialState: function() {
  return {parentData: ""};
  },

// The moment the page renders do this....
  componentDidMount: function() {
  	// console.log("TableRow ===>");
  	// console.log(this);
      
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
    console.log('hello');
  },

  // Here we describe this component's render method
  render: function() {  
  var rowData = this.props.data;
  // console.log(this.timothy);
  // this.timothy; 
  $('.myRow').click(this.timothy);  
    return (
          <tr className="myRow" key={rowData.team} value={rowData.team}>
                <td>{rowData.team}</td>
                <td>{rowData.points.toFixed(1)}</td>
                <td>{rowData.rebounds.toFixed(1)}</td>
                <td>{rowData.assists.toFixed(1)}</td>
                <td>{rowData.blocks.toFixed(1)}</td>
                <td>{rowData.steals.toFixed(1)}</td>
                <td>{rowData.turnovers.toFixed(1)}</td>
            </tr>
    	
      
    );
  }
});

// Export the component back for use in other files
module.exports = LeagueTableRow;


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


