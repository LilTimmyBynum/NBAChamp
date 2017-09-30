// Player

// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../../utils/helpers");

var Form = require("../Form.js");


var styles = {
  img: {
    // border: '2px solid black', 
    // maxWidth:'260px',
    // margin: '2px'
  },
};

// This is the AdminPlayer component. It will be used to view and modify players
var AdminPlayer = React.createClass({
  getInitialState: function() {
  return { teamString: "", playerString: "", onePlayer:[], 

  allPlayers: [ "LeBron James","Iman Shumpert","Richard Jefferson","Tristan Thompson","Derrick Rose","Jose Calderon","Channing Frye","J.R. Smith","Kevin Love","Walter Tavares",
  "Kay Felder","Jeff Green","Kyle Korver","Cedi Osman","Kyrie Irving","Shabazz Napier","Pat Connaughton","Meyers Leonard","Damian Lillard","Al-Farouq Aminu","Noah Vonleh",
  "Andrew Nicholson","Ed Davis","Jusuf Nurkic","Zach Collins","C.J. McCollum","Evan Turner","Jake Layman","Moe Harkless","Caleb Swanigan","Patrick McCaw","Jordan Bell","Damian Jones",
  "Klay Thompson","Kevin Durant","Draymond Green","Shaun Livingston","Stephen Curry","Andre Iguodala","Nick Young","Omri Casspi","Kevon Looney","Chris Boucher","Lance Stephenson",
  "Domantas Sabonis","Thaddeus Young","Myles Turner","Cory Joseph","Glenn Robinson III","Bojan Bogdanovic","Al Jefferson","Joe Young","T.J. Leaf","Edmond Sumner","Victor Oladipo",
  "Ike Anigbogu","Darren Collison","Wesley Iwundu","Aaron Gordon","Arron Afflalo","Jonathon Simmons","Mario Hezonja","Elfrid Payton","Nikola Vucevic","Jonathan Isaac","Bismack Biyombo",
  "D.J. Augustin","Evan Fournier","Terrence Ross","Marreese Speights","Shelvin Mack","Marcus Morris","Shane Larkin","Jayson Tatum","Gordon Hayward","Marcus Smart","Aron Baynes",
  "Isaiah Thomas","Al Horford","Terry Rozier","Abdel Nader","Jae Crowder","Jabari Bird","Semi Ojeleye","Kadeem Allen","Ante Zizic","Jaylen Brown","Serge Ibaka","Delon Wright",
  "Pascal Siakam","Fred VanVleet","DeMar DeRozan","Lucas Nogueira","Bruno Caboclo","C.J. Miles","Malcolm Miller","Kennedy Meeks","Kyle Lowry","OG Anunoby","Lorenzo Brown",
  "Jonas Valanciunas","Alfonzo McKinnie","Jakob Poeltl","Norman Powell","Dario Saric","Justin Anderson","Timothe Luwawu-Cabarrot","Nik Stauskas","Ben Simmons","Robert Covington",
  "Markelle Fultz","Mathias Lessort","Jahlil Okafor","Jonah Bolden","Alex Poythress","Amir Johnson","Joel Embiid","J.J. Redick","T.J. McConnell","Furkan Korkmaz","Richaun Holmes",
  "Jerryd Bayless","Rade Zagorac","Wade Baldwin IV","Jarell Martin","Ben McLemore","JaMychal Green","Deyonta Davis","Chandler Parsons","Mike Conley","James Ennis","Troy Daniels",
  "Andrew Harrison","Dillon Brooks","Mario Chalmers","Wayne Selden Jr.","Marc Gasol","Brandan Wright","Kobi Simmons","Ivan Rabb","Tyreke Evans","Mirza Teletovic","Bronson Koenig",
  "Tony Snell","Sterling Brown","Thon Maker","Khris Middleton","Jalen Moore","Giannis Antetokounmpo","Rashad Vaughn","Greg Monroe","D.J. Wilson","Gary Payton II","John Henson",
  "Spencer Hawes","Jabari Parker","Matthew Dellavedova","Malcolm Brogdon","Jordan Crawford","E'Twaun Moore","Jrue Holiday","Cheick Diallo","Frank Jackson","Alexis Ajinca",
  "Rajon Rondo","Ian Clark","Jalen Jones","DeMarcus Cousins","Omer Asik","Quincy Pondexter","Solomon Hill","Anthony Davis","Darius Miller","Charles Cooke","Jared Dudley",
  "Josh Jackson","Dragan Bender","Alan Williams","Ronnie Price","T.J. Warren","Alex Len","Devin Booker","Tyson Chandler","Elijah Millsap","Davon Reed","Derrick Jones Jr.","Tyler Ulis",
  "Marquese Chriss","Mike James","Eric Bledsoe","Alec Peters","Brandon Knight","Thomas Bryant","Jordan Clarkson","Lonzo Ball","Tyler Ennis","Julius Randle","Ivica Zubac",
  "Corey Brewer","Kyle Kuzma","Luol Deng","Brandon Ingram","Alex Caruso","Larry Nance Jr.","Brook Lopez","Kentavious Caldwell-Pope","Josh Hart","Vander Blue","John Collins",
  "Kent Bazemore","Marco Belinelli","Taurean Prince","Alpha Kaba","Miles Plumlee","Mike Muscala","Nicolas Brussino","Malcolm Delaney","Tyler Dorsey","Dennis Schroder",
  "Ersan Ilyasova","Dewayne Dedmon","DeAndre' Bembry","Denzel Valentine","Justin Holiday","Paul Zipser","Dwyane Wade","Cristiano Felicio","Kris Dunn","Lauri Markkanen",
  "Bobby Portis","Ryan Arcidiacono","Jerian Grant","Nikola Mirotic","Zach LaVine","Robin Lopez","Antonio Blakeney","Cameron Payne","David Nwaba","Justin Jackson",
  "Willie Cauley-Stein","Georgios Papagiannis","George Hill","Harry Giles","Buddy Hield","JaKarr Sampson","Kosta Koufos","Malachi Richardson","Skal Labissiere","Frank Mason III",
  "Bogdan Bogdanovic","De'Aaron Fox","Garrett Temple","Zach Randolph","Vince Carter","Ish Smith","Boban Marjanovic","Anthony Tolliver","Langston Galloway","Reggie Bullock",
  "Andre Drummond","Stanley Johnson","Reggie Jackson","Tobias Harris","Luis Montero","Luke Kennard","Avery Bradley","Eric Moreland","Jon Leuer","Henry Ellenson","Yakuba Ouattara",
  "Isaiah Whitehead","Sean Kilpatrick","Jeremy Lin","Allen Crabbe","Timofey Mozgov","DeMarre Carroll","Aleksandar Vezenkov","Joe Harris","Spencer Dinwiddie","Trevor Booker",
  "Jarrett Allen","Rondae Hollis-Jefferson","Caris LeVert","Quincy Acy","D'Angelo Russell","Alex Abrines","Patrick Patterson","Jerami Grant","Enes Kanter","Andre Roberson",
  "Doug McDermott","Russell Westbrook","Raymond Felton","Steven Adams","Dakari Johnson","Terrance Ferguson","Semaj Christon","Josh Huestis","Kyle Singler","Paul George","Nick Collison",
  "Justise Winslow","Bam Adebayo","Dion Waiters","James Johnson","Hassan Whiteside","Wayne Ellington","Matt Williams","A.J. Hammons","Tyler Johnson","Kelly Olynyk","Derrick Walton Jr.",
  "Rodney McGruder","Okaro White","Udonis Haslem","Josh Richardson","Goran Dragic","Seth Curry","Salah Mejri","Johnathan Motley","Nerlens Noel","Devin Harris",
  "Dorian Finney-Smith","Gian Clavell","Josh McRoberts","Wesley Matthews","Yogi Ferrell","Dennis Smith Jr.","Dwight Powell","Dirk Nowitzki","Jose Juan Barea","Harrison Barnes",
  "Dante Exum","Nigel Williams-Goss","Joe Johnson","Royce O'Neale","Rudy Gobert","Joe Ingles","Jonas Jerebko","Tony Bradley","Alec Burks","Raul Neto","Joel Bolomboy",
  "Eric Griffin","Ricky Rubio","Thabo Sefolosha","Derrick Favors","Donovan Mitchell","Ekpe Udoh","Rodney Hood","Michael Carter-Williams","Malik Monk","Treveon Graham",
  "Johnny O'Bryant III","Dwayne Bacon","Mangok Mathiang","Jeremy Lamb","Kemba Walker","Nicolas Batum","Dwight Howard","Frank Kaminsky","Marvin Williams","Cody Zeller","Marcus Paige",
  "Michael Kidd-Gilchrist","Damyean Dotson","Carmelo Anthony","Tim Hardaway Jr.","Frank Ntilikina","Kristaps Porzingis","Courtney Lee","Willy Hernangomez","Ramon Sessions",
  "Michael Beasley","Joakim Noah","Ognjen Jaramaz","Kyle O'Quinn","Ron Baker","Chasson Randle","Lance Thomas","Mindaugas Kuzminskas","Luke Kornet","Jaron Blossomgame","Brandon Paul",
  "Kyle Anderson","LaMarcus Aldridge","Danny Green","Pau Gasol","Matt Costello","Rudy Gay","Dejounte Murray","Derrick White","Patty Mills","Tony Parker","Kawhi Leonard",
  "Davis Bertans","Bryn Forbes","Joffrey Lauvergne","Monte Morris","Trey Lyles","Paul Millsap","Jameer Nelson","Jamal Murray","Gary Harris","Kenneth Faried","Will Barton",
  "Emmanuel Mudiay","Mason Plumlee","Vlatko Cancar","Torrey Craig","Juan Hernangomez","Darrell Arthur","Malik Beasley","Wilson Chandler","Nikola Jokic","Tyler Lydon","DeAndre Jordan",
  "Brice Johnson","Blake Griffin","Lou Williams","Wesley Johnson","Austin Rivers","Danilo Gallinari","Sindarius Thornwell","DeAndre Liggins","Sam Dekker","Montrezl Harrell",
  "Patrick Beverley","Willie Reed","Jawun Evans","Milos Teodosic","Troy Williams","Isaiah Hartenstein","Tim Quarterman","Ryan Anderson","Isaiah Taylor","Trevor Ariza","Chris Paul",
  "Tarik Black","James Harden","Luc Mbah a Moute","Clint Capela","Zhou Qi","P.J. Tucker","Chinanu Onuaku","Nene Hilario","Shawn Long","Eric Gordon","Cameron Oliver","Cole Aldrich",
  "Jimmy Butler","Andrew Wiggins","Jamal Crawford","Justin Patton","Taj Gibson","Jeff Teague","Nemanja Bjelica","Karl-Anthony Towns","Tyus Jones","Marcus Georges-Hunt",
  "Melo Trimble","Anthony Brown","Gorgui Dieng","Tim Frazier","Markieff Morris","Michael Young","John Wall","Otto Porter","Jason Smith","Kelly Oubre Jr.","Daniel Ochefu",
  "Devin Robinson","Chris McCullough","Tomas Satoransky","Sheldon Mac","Ian Mahinmi","Jodie Meeks","Mike Scott","Marcin Gortat","Bradley Beal" ]

   };
  },

// The moment the page renders do this.......
  componentDidMount: function() {
    // helpers.getOnePlayer().then(function(response) {
    //   // console.log(response);
    //   if (response !== this.state.onePlayer) {
    //     // console.log("onePlayer", response.data);
    //     this.setState({ onePlayer: response.data });
    //       // console.log(this.state);
    //       this.state.teamString = ("./images/NBA_Logos/" + this.state.onePlayer.team  + ".png");

    //         var tempPlayer = this.state.onePlayer.name;
    //         var realPlayer = tempPlayer.replace(" ", "_");
    //           // console.log(realPlayer);

    //         this.state.playerString = ("./images/NBA_Photos/" + realPlayer  + ".png");
          
    //          $("#playerTeam").attr("src", this.state.teamString);
    //          $("#playerPhoto").attr("src", this.state.playerString); 
    //   }
    // }.bind(this));    
  },

  getOnePlayer: function(data) {
    console.log(data);
    helpers.getOnePlayer(data).then(function(response) {
      console.log(response);
      if (response !== this.state.onePlayer) {
        console.log("onePlayer", response.data);
        this.setState({ onePlayer: response.data });

          console.log(this.state);
          this.state.teamString = ("./images/NBA_Logos/" + this.state.onePlayer.team  + ".png");

            var tempPlayer = this.state.onePlayer.name;
            var realPlayer = tempPlayer.replace(" ", "_");
              console.log(realPlayer);

            this.state.playerString = ("./images/NBA_Photos/" + realPlayer  + ".png");
          
             $("#playerTeam").attr("src", this.state.teamString);
             $("#playerPhoto").attr("src", this.state.playerString); 
      }
    }.bind(this));
  },


  changeTeam: function(data) {
    // var playerStuff = $("#changeTeamInput").val();
    // console.log(".....in chgeTeam.....");    
    // console.log(playerStuff);

    console.log(data);
    helpers.getOnePlayer(data).then(function(response) {
      console.log(response);
      if (response !== this.state.onePlayer) {
        console.log("onePlayer", response.data);
        this.setState({ onePlayer: response.data });

          console.log(this.state);
          this.state.teamString = ("./images/NBA_Logos/" + this.state.onePlayer.team  + ".png");

            var tempPlayer = this.state.onePlayer.name;
            var realPlayer = tempPlayer.replace(" ", "_");
              console.log(realPlayer);

            this.state.playerString = ("./images/NBA_Photos/" + realPlayer  + ".png");
          
             $("#playerTeam").attr("src", this.state.teamString);
             $("#playerPhoto").attr("src", this.state.playerString); 
      }
    }.bind(this));



  },



  //gets the team as 'data' from the Logos child component
  getTeam: function(data){
    this.setState({childData: data});
    console.log(data);
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
  console.log("submitted something..............");
  var playerQuery = $("#playerInput").val();
  console.log(playerQuery);
  var phoneCheck = $.inArray(playerQuery, this.state.allPlayers);
  console.log(phoneCheck);


  if (($.inArray(playerQuery, this.state.allPlayers)) > -1 ) {

    console.log("Voila !!!!");
    this.getOnePlayer(playerQuery);

  };






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
    	<div className="container sameContainer">
      <div className="panel panel-default backPanel panelAdjust">
        <div className="panel-heading backPanel smallPadding">
          <div className="panel-title text-center backPanel">NBA Player Overview</div>
        </div>

        <div className="row">
        <div className="col xs2">
          <div className="overlap overlapAdjust">
          <img className="overOne" id="playerPhoto" src="./images/NBA_Photos/TimKnicks.png" style={styles.img} onClick={this.timothy}/>
          <img className="overTwo" id="playerTeam" src="" style={styles.img} onClick={this.timothy}/>
          </div>
        </div>
        <div className="col xs6">
          <h3 className="">{this.state.onePlayer.name}</h3>
          <div className="row lilRow">
          <div className="col xs8"><div>Team:</div> </div>
          <div className="col xs4"><div>{this.state.onePlayer.team}</div></div>
          </div>
          <div className="row lilRow">
          <div className="col xs10">Experience:</div>
          <div className="col xs2">{this.state.onePlayer.experience} (years)</div>
          </div>
          <div className="row lilRow">
          <div className="col xs6">Position:</div>
          <div className="col xs6">{this.state.onePlayer.position}</div>
          </div>
          <div className="row lilRow">
          <div className="col xs6">Status:</div>
          <div className="col xs6">{this.state.onePlayer.status}</div>
          </div>          
          </div>
        <div className="col xs4">
          <div className="row">
          <div className="col xs4">
          <div className="panel-heading backPanel smallPadding">PPG
          <div className="panel-body">{this.state.onePlayer.ppg}</div>
          </div>
          </div>
          <div className="col xs4">
          <div className="panel-heading backPanel smallPadding">RPG
          <div className="panel-body">{this.state.onePlayer.rpg}</div>
          </div>
          </div>
          <div className="col xs4">
          <div className="panel-heading backPanel smallPadding">APG
          <div className="panel-body">{this.state.onePlayer.apg}</div>
          </div>
          </div>
          </div>
          <div className="row">
          <div className="col xs4">
          <div className="panel-heading backPanel smallPadding">BPG
          <div className="panel-body">{this.state.onePlayer.bpg}</div>
          </div>
          </div>
          <div className="col xs4">
          <div className="panel-heading backPanel smallPadding">SPG
          <div className="panel-body">{this.state.onePlayer.spg}</div>
          </div>
          </div>
          <div className="col xs4">
          <div className="panel-heading backPanel smallPadding">TOPG
          <div className="panel-body">{this.state.onePlayer.topg}</div>
          </div>
          </div>
          </div>
        </div>
          </div>
      </div>





      <div className="row">


      <div className="col xs6">
      <div className="panel backPanel">
        <div className="panel-heading">
          <h3 className="panel-title text-center backPanel">Player query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
          {/* <input value={this.state.term} type="text" className="form-control" id="playerInput" onChange={this.handleChange} required placeholder="Enter player name"  */}
               <input type="text" className="form-control" id="playerInput" onChange={this.handleChange} required placeholder="Enter player name"/>
              <br />
              <button className="btn backPanel" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      </div>      


      
      </div>











      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = AdminPlayer;






// <div className="col s12 m7">
//             <h2 className="header">{this.state.onePlayer.name}</h2>
//           <div className="card horizontal">
//           <div className="card-image">
//             <div><img src="https://lorempixel.com/100/190/nature/6"/></div>
//         </div>
//       <div className="card-stacked">
//         <div className="card-content">
//           <div className="row">
//           <div className="col xs4">{this.state.onePlayer.apg}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.bpg}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.ppg}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.rpg}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.spg}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.topg}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.experience}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.name}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.position}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.status}
//           </div>
//           <div className="col xs4">{this.state.onePlayer.team}
//           </div>
//           </div>
//         </div>
//         <div className="card-action">
//           <a href="#">This is a link</a>
//         </div>
//       </div>
//     </div>
//   </div>







