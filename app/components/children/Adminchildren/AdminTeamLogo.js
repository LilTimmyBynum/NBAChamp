// AdminTeam header team logos -- clickable logos to select a team

// Include React
var React = require("react");

// import img from 'public/images/NBA_logo/Knicks.png';

// Helper for making AJAX requests to our API
var helpers = require("../../utils/helpers");

var msg;

var styles = {
  img: {
    border: '2px solid black', 
    maxWidth:'45px',
    margin: '2px'
  },
};



// This is the HomeTeamCarousel component. It displays all teams on a carousel
var LogoClick = React.createClass({


getInitialState: function() {
    return { myTeam: "" };
  },


// // The moment the page renders get the History
//   componentDidMount: function() {
//     // Get the latest history.
//     helpers.getMyArticles().then(function(response) {
//       console.log(response);
//       if (response !== this.state.articles) {
//         console.log("Articles", response.data);
//         this.setState({ articles: response.data });
//       }
//     }.bind(this));
//   },  


// The moment the page renders get the History
  componentDidMount: function() {
  	// msg = "./images/NBA_Logos/Bucks.png";



   //  $(document).ready(function(){
   //      $('.carousel').carousel();
   //    });
  },

  // This function will respond to the user input
  timothy: function(id) {
    // get id from clicked logo
    console.log(id.target.id);
    console.log(this.props.sendData);
    console.log(this.state.myTeam);
    this.props.sendData(id.target.id);
    // this.props.sendData(this.state.myTeam);
  },


  // Here we describe this component's render method
  render: function() {
    return (
      <div>
      
    	<div className="row">
      <div className="myCenter">    	
            <div className="col xs4">
            <div>Atlantic</div>
            <div align="center">
          <img id="Celtics" src="./images/NBA_Logos/Celtics.png" style={styles.img} onClick={this.timothy}/>
          <img id="Knicks" src="./images/NBA_Logos/Knicks.png" style={styles.img} onClick={this.timothy}/>
          <img id="76ers" src="./images/NBA_Logos/Sixers.png" style={styles.img} onClick={this.timothy}/>
          <img id="Nets"  src="./images/NBA_Logos/Nets.png" style={styles.img} onClick={this.timothy}/>
          <img id="Raptors" src="./images/NBA_Logos/Raptors.png" style={styles.img} onClick={this.timothy}/> 
          </div>               
            </div>
            <div className="col xs4">
            <div>Southeast</div>
            <div>
            <img id="Hawks" src="./images/NBA_Logos/Hawks.png" style={styles.img} onClick={this.timothy}/>
          <img id="Heat" src="./images/NBA_Logos/Heat.png" style={styles.img} onClick={this.timothy}/>
          <img id="Hornets" src="./images/NBA_Logos/Hornets.png" style={styles.img} onClick={this.timothy}/>
          <img id="Wizards"  src="./images/NBA_Logos/Wizards.png" style={styles.img} onClick={this.timothy}/>
          <img id="Magic" src="./images/NBA_Logos/Magic.png" style={styles.img} onClick={this.timothy}/>
            </div>
            </div>
            <div className="col xs4">
            <div>Pacific</div>
            <div>
            <img id="Clippers" src="./images/NBA_Logos/Clippers.png" style={styles.img} onClick={this.timothy}/>
          <img id="Kings" src="./images/NBA_Logos/Kings.png" style={styles.img} onClick={this.timothy}/>
          <img id="Lakers" src="./images/NBA_Logos/Lakers.png" style={styles.img} onClick={this.timothy}/>
          <img id="Suns"  src="./images/NBA_Logos/Suns.png" style={styles.img} onClick={this.timothy}/>
          <img id="Warriors" src="./images/NBA_Logos/Warriors.png" style={styles.img} onClick={this.timothy}/>
            </div>
            </div>         
        </div>
        </div>

       

        <div className="row">
        <div className="myCenter">
            <div className="col xs4">
            <div>Southwest</div>
            <div>
            <img id="Grizzlies" src="./images/NBA_Logos/Grizzlies.png" style={styles.img} onClick={this.timothy}/>
          <img id="Pelicans" src="./images/NBA_Logos/Pelicans.png" style={styles.img} onClick={this.timothy}/>
          <img id="Spurs" src="./images/NBA_Logos/Spurs.png" style={styles.img} onClick={this.timothy}/>
          <img id="Mavericks"  src="./images/NBA_Logos/Mavericks.png" style={styles.img} onClick={this.timothy}/>
          <img id="Rockets" src="./images/NBA_Logos/Rockets.png" style={styles.img} onClick={this.timothy}/>                
            </div>
            </div>
            <div className="col xs4">
            <div>Northwest</div>
            <div>
            <img id="Jazz" src="./images/NBA_Logos/Jazz.png" style={styles.img} onClick={this.timothy}/>
          <img id="Nuggets" src="./images/NBA_Logos/Nuggets.png" style={styles.img} onClick={this.timothy}/>
          <img id="Thunder" src="./images/NBA_Logos/Thunder.png" style={styles.img} onClick={this.timothy}/>
          <img id="Timberwolves"  src="./images/NBA_Logos/Twolves.png" style={styles.img} onClick={this.timothy}/>
          <img id="Trail Blazers" src="./images/NBA_Logos/Blazers.png" style={styles.img} onClick={this.timothy}/>
            </div>
            </div>
            <div className="col xs4">
            <div>Central</div>
            <div>
            <img id="Pacers" src="./images/NBA_Logos/Pacers.png" style={styles.img} onClick={this.timothy}/>
          <img id="Pistons" src="./images/NBA_Logos/Pistons.png" style={styles.img} onClick={this.timothy}/>
          <img id="Bucks" src="./images/NBA_Logos/Bucks.png" style={styles.img} onClick={this.timothy}/>
          <img id="Bulls"  src="./images/NBA_Logos/Bulls.png" style={styles.img} onClick={this.timothy}/>
          <img id="Cavaliers" src="./images/NBA_Logos/Cavaliers.png" style={styles.img} onClick={this.timothy}/>
            </div>
            </div> 
            </div>           
        </div>

       
      
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = LogoClick;


 // // This function will respond to the user input
  // handleChange: function(event) {

  //   this.setState({ term: event.target.value });

  // },

  // // When a user submits...
  // handleSubmit: function(event) {
  //   // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
  //   // clicking the button
  //   event.preventDefault();
  // },

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