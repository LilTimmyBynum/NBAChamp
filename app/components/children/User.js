// users screen
// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// use the coutup.js library
import CountUp, { startAnimation } from 'react-countup';

var HomeTeamCarousel = require("./HomeTeamCarousel.js");
var AwayTeamCarousel = require("./AwayTeamCarousel.js");

// This is the History component. It will be used to show a log of  recent searches.
var User = React.createClass({
  getInitialState: function() {
  return { searchTerm: "", results: "", hometeam: [], awayteam: [] };
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


  // gets the team as 'data' for the home team
  getHomeData: function(data){
    this.setState({childData: data});
    console.log(data);

    helpers.getAdminTeam(data).then(function(response) {
      console.log(response);
      if (response !== this.state.hometeam) {
        console.log("hometeam", response.data);
        console.log("players", response.data.players);
        this.setState({hometeam: response.data.players});
        console.log(this);
      }
    }.bind(this));
  },


  // gets the team as 'data' for the away team
  getAwayData: function(data){
    this.setState({childData: data});
    console.log("........away data.........");
    console.log(data);

    helpers.getAdminTeam(data).then(function(response) {
      console.log(response);
      if (response !== this.state.awayteam) {
        console.log("awayteam", response.data);
        console.log("players", response.data.players);
        this.setState({awayteam: response.data.players});
        console.log(this);
      }
    }.bind(this));
  },

   // This function will respond to the user input
  gametime: function(id) {
    console.log(".......gametime......");
    console.log(this.state.hometeam);
    console.log(this.state.awayteam);

    var homeStrength = 0;
    var home = this.state.hometeam;
    console.log(home);
    for (var i = 0; i < home.length; i++) {

      if(isNaN(home[i].ppg)) {
        console.log("No Value");
      } else {
      homeStrength += home[i].ppg * .3;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(home[i].rpg)) {
        console.log("No Value");
      } else {
      homeStrength += home[i].ppg * .2;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(home[i].apg)) {
        console.log("No Value");
      } else {
      homeStrength += home[i].ppg * .2;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(home[i].blocks)) {
        console.log("No Value");
      } else {
      homeStrength += home[i].ppg * .1;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(home[i].steals)) {
        console.log("No Value");
      } else {
      homeStrength += home[i].ppg * .1;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(home[i].turnovers)) {
        console.log("No Value");
      } else {
      homeStrength += home[i].ppg * .3;
      // console.log("Homestrength =======> " + homeStrength);
      };

    };


     var awayStrength = 0;
    var away = this.state.awayteam;
    console.log(away);
    for (var i = 0; i < away.length; i++) {

      if(isNaN(away[i].ppg)) {
        console.log("No Value");
      } else {
      awayStrength += away[i].ppg * .3;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(away[i].rpg)) {
        console.log("No Value");
      } else {
      awayStrength += away[i].ppg * .2;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(away[i].apg)) {
        console.log("No Value");
      } else {
      awayStrength += away[i].ppg * .2;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(away[i].blocks)) {
        console.log("No Value");
      } else {
      awayStrength += away[i].ppg * .1;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(away[i].steals)) {
        console.log("No Value");
      } else {
      awayStrength += away[i].ppg * .1;
      // console.log("Homestrength =======> " + homeStrength);
      };

      if(isNaN(away[i].turnovers)) {
        console.log("No Value");
      } else {
      awayStrength += away[i].ppg * .3;
      // console.log("Homestrength =======> " + homeStrength);
      };
    };
    console.log("Homestrength =======> " + homeStrength);
      console.log("Awaystrength =======> " + awayStrength);

      $("#homeTeamStrength").text(homeStrength);
      $("#awayTeamStrength").text(awayStrength);

  },

  // Here we describe this component's render method
  render: function() {    
    return (
      <div>

      

      <div className="row">
      
      <div className="col-xs-4">
        <HomeTeamCarousel  sendHomeData={this.getHomeData}/>

                <div className="card myCard" visibility="hidden">
                    <div className="card-content">
                        <div>home team strength:</div>
                        <div id="homeTeamStrength"></div>
                    </div>
                </div>


      </div>


      <div className="col-xs-1">
      </div>

      <div className="col-xs-2">
      <img id="vsImage" src="./images/package.png" onClick={this.gametime}/>
      </div>

      <div className="col-xs-1">
      </div>

      <div className="col-xs-4">
      <AwayTeamCarousel sendAwayData={this.getAwayData}/>

      <div className="card myCard" visibility="hidden">
                    <div className="card-content">
                        <div >away team strength:</div>
                        <div id="awayTeamStrength"></div> 
                    </div>
                </div>


      </div>
      </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = User;




// <div className="panel panel-default ">
//         <div className="panel-heading">
//           <h3 className="panel-title text-center">User stuff goes in here</h3>
//         </div>



//       </div>

// <CountUp start={0} end={160526} />