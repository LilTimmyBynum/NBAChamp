// away team carousel

// Include React
var React = require("react");

// import img from 'public/images/NBA_logo/Knicks.png';

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

var msg;

var styles = {
  img: {
    border: '5px solid black'
  },
};



// This is the HomeTeamCarousel component. It displays all teams on a carousel
var AwayTeamCarousel = React.createClass({


// getInitialState: function() {
//     return { searchTerm: "", results: "", history: [], articles: [] };
//   },


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
  	msg = "./images/NBA_Logos/Bucks.png";
console.log("carousel mounted ................");

    $("#awayCarousel").carousel();
    $("#awayCarousel").carousel({indicators: false});
      $('.carousel.carousel-slider').carousel({fullWidth: false});
      $('.carousel.carousel-slider').carousel({noWrap: true});


      console.log($("#awayCarousel").attr("id"));
      console.log($("#awayCarousel").css("display"));

      $("#awayCarousel").show();


      $("#awayCarousel .carousel-item").click(function(){
    console.log($(this).attr("id"));
    console.log($(this).parent().attr("id"));      
      if($(this).parent().attr("id") == "awayCarousel" ){
        $("#awayTeamText").text($(this).attr("id"));
      }else{
        // $("#awayTeamText").text($(this).attr("id"));
      };

    });
  },

  // This function will respond to the user input
  timothy: function(event) {
    console.log('hello')
    //this.setState({ term: event.target.value });
  },



  

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


  // Here we describe this component's render method
  render: function() {
    return (

      <div>


    	
                <div className="carousel" id="awayCarousel">
                    <a id="Blazers" className="carousel-item" href="#Blazers!"><img src="./images/NBA_Logos/Blazers.png"/></a>
                    <a id="Bucks" className="carousel-item" href="#Bucks!"><img src="./images/NBA_Logos/Bucks.png"/></a>
                    <a id="Bulls" className="carousel-item" href="#Bulls!"><img src="./images/NBA_Logos/Bulls.png"/></a>
                    <a id="Cavaliers" className="carousel-item" href="#Cavaliers!"><img src="./images/NBA_Logos/Cavaliers.png"/></a>
                    <a id="Celtics" className="carousel-item" href="#Celtics!"><img src="./images/NBA_Logos/Celtics.png"/></a>
                    <a id="Clippers" className="carousel-item" href="#Clippers!"><img src="./images/NBA_Logos/Clippers.png"/></a>
                    <a id="Grizzlies" className="carousel-item" href="#Grizzlies!"><img src="./images/NBA_Logos/Grizzlies.png"/></a>
                    <a id="Hawks" className="carousel-item" href="#Hawks!"><img src="./images/NBA_Logos/Hawks.png"/></a>
                    <a id="Heat" className="carousel-item" href="#Heat!"><img src="./images/NBA_Logos/Heat.png"/></a>
                    <a id="Hornets" className="carousel-item" href="#Hornets!"><img src="./images/NBA_Logos/Hornets.png"/></a>
                    <a id="Jazz" className="carousel-item" href="#Jazz!"><img src="./images/NBA_Logos/Jazz.png"/></a>
                    <a id="Kings" className="carousel-item" href="#Kings!"><img src="./images/NBA_Logos/Kings.png"/></a>
                    <a id="Knicks" className="carousel-item" href="#Knicks!"><img src="./images/NBA_Logos/Knicks.png"/></a>
                    <a id="Lakers" className="carousel-item" href="#Lakers!"><img src="./images/NBA_Logos/Lakers.png"/></a>
                    <a id="Magic" className="carousel-item" href="#Magic!"><img src="./images/NBA_Logos/Magic.png"/></a>
                    <a id="Mavericks" className="carousel-item" href="#Mavericks!"><img src="./images/NBA_Logos/Mavericks.png"/></a>
                    <a id="Nets" className="carousel-item" href="#Nets!"><img src="./images/NBA_Logos/Nets.png"/></a>
                    <a id="Nuggets" className="carousel-item" href="#Nuggets!"><img src="./images/NBA_Logos/Nuggets.png"/></a>
                    <a id="Pacers" className="carousel-item" href="#Pacers!"><img src="./images/NBA_Logos/Pacers.png"/></a>
                    <a id="Pelicans" className="carousel-item" href="#Pelicans!"><img src="./images/NBA_Logos/Pelicans.png"/></a>
                    <a id="Pistons" className="carousel-item" href="#Pistons!"><img src="./images/NBA_Logos/Pistons.png"/></a>
                    <a id="Raptors" className="carousel-item" href="#Raptors!"><img src="./images/NBA_Logos/Raptors.png"/></a>
                    <a id="Rockets" className="carousel-item" href="#Rockets!"><img src="./images/NBA_Logos/Rockets.png"/></a>
                    <a id="Sixers" className="carousel-item" href="#Sixers!"><img src="./images/NBA_Logos/Sixers.png"/></a>
                    <a id="Spurs" className="carousel-item" href="#Spurs!"><img src="./images/NBA_Logos/Spurs.png"/></a>
                    <a id="Suns" className="carousel-item" href="#Suns!"><img src="./images/NBA_Logos/Suns.png"/></a>
                    <a id="Thunder" className="carousel-item" href="#Thunder!"><img src="./images/NBA_Logos/Thunder.png"/></a>
                    <a id="Twolves" className="carousel-item" href="#Twolves!"><img src="./images/NBA_Logos/Twolves.png"/></a>
                    <a id="Warriors" className="carousel-item" href="#Warriors!"><img src="./images/NBA_Logos/Warriors.png"/></a>
                    <a id="Wizards" className="carousel-item" href="#Wizards!"><img src="./images/NBA_Logos/Wizards.png"/></a>
                    
                </div>
            
            
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <p id="awayTeamText">away team</p>
                    </div>
                </div>
            
      



    	</div>
      

    );
  }
});

// Export the component back for use in other files
module.exports = AwayTeamCarousel;




// <a id="Celtics" className="carousel-item" href="#Celtics!"><img src="./images/NBA_Logos/Celtics.png"/></a>
//                     <a id="Clippers" className="carousel-item" href="#Clippers!"><img src="./images/NBA_Logos/Clippers.png"/></a>
//                     <a id="Grizzlies" className="carousel-item" href="#Grizzlies!"><img src="./images/NBA_Logos/Grizzlies.png"/></a>
//                     <a id="Hawks" className="carousel-item" href="#Hawks!"><img src="./images/NBA_Logos/Hawks.png"/></a>
//                     <a id="Heat" className="carousel-item" href="#Heat!"><img src="./images/NBA_Logos/Heat.png"/></a>
//                     <a id="Hornets" className="carousel-item" href="#Hornets!"><img src="./images/NBA_Logos/Hornets.png"/></a>
//                     <a id="Jazz" className="carousel-item" href="#Jazz!"><img src="./images/NBA_Logos/Jazz.png"/></a>
//                     <a id="Kings" className="carousel-item" href="#Kings!"><img src="./images/NBA_Logos/Kings.png"/></a>
//                     <a id="Knicks" className="carousel-item" href="#Knicks!"><img src="./images/NBA_Logos/Knicks.png"/></a>
//                     <a id="Lakers" className="carousel-item" href="#Lakers!"><img src="./images/NBA_Logos/Lakers.png"/></a>
//                     <a id="Magic" className="carousel-item" href="#Magic!"><img src="./images/NBA_Logos/Magic.png"/></a>
//                     <a id="Mavericks" className="carousel-item" href="#Mavericks!"><img src="./images/NBA_Logos/Mavericks.png"/></a>
//                     <a id="Nets" className="carousel-item" href="#Nets!"><img src="./images/NBA_Logos/Nets.png"/></a>
//                     <a id="Nuggets" className="carousel-item" href="#Nuggets!"><img src="./images/NBA_Logos/Nuggets.png"/></a>
//                     <a id="Pacers" className="carousel-item" href="#Pacers!"><img src="./images/NBA_Logos/Pacers.png"/></a>
//                     <a id="Pelicans" className="carousel-item" href="#Pelicans!"><img src="./images/NBA_Logos/Pelicans.png"/></a>
//                     <a id="Pistons" className="carousel-item" href="#Pistons!"><img src="./images/NBA_Logos/Pistons.png"/></a>
//                     <a id="Raptors" className="carousel-item" href="#Raptors!"><img src="./images/NBA_Logos/Raptors.png"/></a>
//                     <a id="Rockets" className="carousel-item" href="#Rockets!"><img src="./images/NBA_Logos/Rockets.png"/></a>
//                     <a id="Sixers" className="carousel-item" href="#Sixers!"><img src="./images/NBA_Logos/Sixers.png"/></a>
//                     <a id="Spurs" className="carousel-item" href="#Spurs!"><img src="./images/NBA_Logos/Spurs.png"/></a>
//                     <a id="Suns" className="carousel-item" href="#Suns!"><img src="./images/NBA_Logos/Suns.png"/></a>
//                     <a id="Thunder" className="carousel-item" href="#Thunder!"><img src="./images/NBA_Logos/Thunder.png"/></a>
//                     <a id="Twolves" className="carousel-item" href="#Twolves!"><img src="./images/NBA_Logos/Twolves.png"/></a>
//                     <a id="Warriors" className="carousel-item" href="#Warriors!"><img src="./images/NBA_Logos/Warriors.png"/></a>
//                     <a id="Wizards" className="carousel-item" href="#Wizards!"><img src="./images/NBA_Logos/Wizards.png"/></a>
//                     <a id="East" className="carousel-item" href="#East!"><img src="./images/NBA_Logos/East.png"/></a>
//                     <a id="West" className="carousel-item" href="#West!"><img src="./images/NBA_Logos/West.png"/></a>



// <img src="./images/NBA_Logos/Knicks.png"/>


