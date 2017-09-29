// Include Server Dependencies
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var logger = require("morgan");
var mongoose = require("mongoose");


var db = require("./models");




// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");
var scraper = require("scraper");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

app.use(express.static("public"));

// using this for help loading static images
// app.use('/static', express.static(path.join(__dirname, 'public')));

// -------------------------------------------------

// hardcode SQL port to 8080 for now.........
var port = 3036;

// SQL-ize Configuration 
db.sequelize.sync().then(function() {
  // app.listen(port, function(err) {
    app.listen(port, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.info("Listening on port %s.", port);
    }
  });
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// route admin path
app.get("/admin", function(req, res) {
  console.log("Tim Bynum is coooool");

  
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
// app.get("/api", function(req, res) {

//   // We will find all the records, sort it in descending order, then limit the records to 5
//   History.find({}).sort([
//     ["date", "descending"]
//   ]).limit(5).exec(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });




app.get("/news", function(req,res) {

  var timo = ["ice", "cream", "dream"];

  console.log("tim has data !!!!!!!!!!!!!!!!");

  var scrapedStuff = [];

  request("http://abc7ny.com/news//", function(error, response, html) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        console.log("am i working ?!?!?!?!?!");
        var $ = cheerio.load(html);
        $(".headline-list-item").each(function(i, element) {
            var headlineScrape = $(element).children("a").children(".headline").text();
            var imageScrape = $(element).children("a").children(".image").children("img").attr("src");
            var prelinkScrape = $(element).children("a").attr("href");

            var linkScrape = "http://abc7ny.com";

            if (headlineScrape && prelinkScrape && imageScrape) {
                linkScrape += prelinkScrape;

                var news = { headline: headlineScrape, image: imageScrape, link: linkScrape };
                scrapedStuff.push(news);
            };
        });
        var newsObject = { newNews: scrapedStuff };
        // res.render("index", newsObject);
        res.send(newsObject);
    });



// res.send(timo);
});
     // console.log("Getting scrape data =========================>");
    // // First, we grab the body of the html with request

    // scraper("http://abc7ny.com/news//", function(err, data) {
    //   if(err) {
    //     console.log(err)
    //   };

    //   data('.msg').each(function() {
    //     console.log(data(this).text().trim()+'\n');
    //   });


    // var timo = "TimBynum";

    // return timo;
    // });

// get all players from the db
app.get("/league", function(req, res) {        
        var points = 0;
        var rebounds = 0;
        var assists = 0;
        var blocks = 0;
        var steals = 0;
        var turnovers = 0;
        var ROC = {team: "Rockets", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var NYK = {team: "Knicks", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var CLE = {team: "Cavaliers", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var BOS = {team: "Celtics", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var POR = {team: "Trail Blazers", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var GSW = {team: "Warriors", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var IND = {team: "Pacers", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var ORL = {team: "Magic", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var TOR = {team: "Raptors", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var PHI = {team: "76ers", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var MEM = {team: "Grizzlies", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var MIL = {team: "Bucks", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var NOR = {team: "Pelicans", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var PHX = {team: "Suns", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var LAL = {team: "Lakers", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var ATL = {team: "Hawks", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var CHI = {team: "Bulls", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var SAC = {team: "Kings", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var DET = {team: "Pistons", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var BKN = {team: "Nets", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var OKC = {team: "Thunder", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var MIA = {team: "Heat", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var DAL = {team: "Mavericks", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var UTA = {team: "Jazz", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var CHA = {team: "Hornets", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var SAN = {team: "Spurs", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var DEN = {team: "Nuggets", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var LAC = {team: "Clippers", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var MIN = {team: "Timberwolves", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};
        var WAS = {team: "Wizards", points: 0, rebounds: 0, assists: 0, blocks: 0, steals: 0, turnovers: 0};        

        var leagueArray = [];

        var teamObject;

    db.sequelize.query("SELECT * FROM `players`", {type: db.sequelize.QueryTypes.SELECT})
      .then(dbTeam => {
        dbTeam.forEach(dbPlayer => {
            var seasonX = JSON.parse(dbPlayer.seasons);
            team = dbPlayer.team;
            if(dbPlayer.seasons){

                switch(team) {
                    case "Knicks":
                    NYK.points += seasonX[0].teams[0].average.points;
                    NYK.rebounds += seasonX[0].teams[0].average.rebounds;
                    NYK.assists += seasonX[0].teams[0].average.assists;
                    NYK.blocks += seasonX[0].teams[0].average.blocks;
                    NYK.steals += seasonX[0].teams[0].average.steals;
                    NYK.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Cavaliers": 
                        CLE.points += seasonX[0].teams[0].average.points;
                        CLE.rebounds += seasonX[0].teams[0].average.rebounds;
                        CLE.assists += seasonX[0].teams[0].average.assists;
                        CLE.blocks += seasonX[0].teams[0].average.blocks;
                        CLE.steals += seasonX[0].teams[0].average.steals;
                        CLE.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Celtics": 
                        BOS.points += seasonX[0].teams[0].average.points;
                        BOS.rebounds += seasonX[0].teams[0].average.rebounds;
                        BOS.assists += seasonX[0].teams[0].average.assists;
                        BOS.blocks += seasonX[0].teams[0].average.blocks;
                        BOS.steals += seasonX[0].teams[0].average.steals;
                        BOS.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Trail Blazers": 
                        POR.points += seasonX[0].teams[0].average.points;
                        POR.rebounds += seasonX[0].teams[0].average.rebounds;
                        POR.assists += seasonX[0].teams[0].average.assists;
                        POR.blocks += seasonX[0].teams[0].average.blocks;
                        POR.steals += seasonX[0].teams[0].average.steals;
                        POR.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Warriors": 
                        GSW.points += seasonX[0].teams[0].average.points;
                        GSW.rebounds += seasonX[0].teams[0].average.rebounds;
                        GSW.assists += seasonX[0].teams[0].average.assists;
                        GSW.blocks += seasonX[0].teams[0].average.blocks;
                        GSW.steals += seasonX[0].teams[0].average.steals;
                        GSW.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Pacers": 
                        IND.points += seasonX[0].teams[0].average.points;
                        IND.rebounds += seasonX[0].teams[0].average.rebounds;
                        IND.assists += seasonX[0].teams[0].average.assists;
                        IND.blocks += seasonX[0].teams[0].average.blocks;
                        IND.steals += seasonX[0].teams[0].average.steals;
                        IND.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Magic": 
                        ORL.points += seasonX[0].teams[0].average.points;
                        ORL.rebounds += seasonX[0].teams[0].average.rebounds;
                        ORL.assists += seasonX[0].teams[0].average.assists;
                        ORL.blocks += seasonX[0].teams[0].average.blocks;
                        ORL.steals += seasonX[0].teams[0].average.steals;
                        ORL.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Raptors": 
                        TOR.points += seasonX[0].teams[0].average.points;
                        TOR.rebounds += seasonX[0].teams[0].average.rebounds;
                        TOR.assists += seasonX[0].teams[0].average.assists;
                        TOR.blocks += seasonX[0].teams[0].average.blocks;
                        TOR.steals += seasonX[0].teams[0].average.steals;
                        TOR.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "76ers": 
                        PHI.points += seasonX[0].teams[0].average.points;
                        PHI.rebounds += seasonX[0].teams[0].average.rebounds;
                        PHI.assists += seasonX[0].teams[0].average.assists;
                        PHI.blocks += seasonX[0].teams[0].average.blocks;
                        PHI.steals += seasonX[0].teams[0].average.steals;
                        PHI.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Grizzlies": 
                        MEM.points += seasonX[0].teams[0].average.points;
                        MEM.rebounds += seasonX[0].teams[0].average.rebounds;
                        MEM.assists += seasonX[0].teams[0].average.assists;
                        MEM.blocks += seasonX[0].teams[0].average.blocks;
                        MEM.steals += seasonX[0].teams[0].average.steals;
                        MEM.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Bucks": 
                        MIL.points += seasonX[0].teams[0].average.points;
                        MIL.rebounds += seasonX[0].teams[0].average.rebounds;
                        MIL.assists += seasonX[0].teams[0].average.assists;
                        MIL.blocks += seasonX[0].teams[0].average.blocks;
                        MIL.steals += seasonX[0].teams[0].average.steals;
                        MIL.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Pelicans": 
                        NOR.points += seasonX[0].teams[0].average.points;
                        NOR.rebounds += seasonX[0].teams[0].average.rebounds;
                        NOR.assists += seasonX[0].teams[0].average.assists;
                        NOR.blocks += seasonX[0].teams[0].average.blocks;
                        NOR.steals += seasonX[0].teams[0].average.steals;
                        NOR.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Suns": 
                        PHX.points += seasonX[0].teams[0].average.points;
                        PHX.rebounds += seasonX[0].teams[0].average.rebounds;
                        PHX.assists += seasonX[0].teams[0].average.assists;
                        PHX.blocks += seasonX[0].teams[0].average.blocks;
                        PHX.steals += seasonX[0].teams[0].average.steals;
                        PHX.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Lakers": 
                        LAL.points += seasonX[0].teams[0].average.points;
                        LAL.rebounds += seasonX[0].teams[0].average.rebounds;
                        LAL.assists += seasonX[0].teams[0].average.assists;
                        LAL.blocks += seasonX[0].teams[0].average.blocks;
                        LAL.steals += seasonX[0].teams[0].average.steals;
                        LAL.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Hawks": 
                        ATL.points += seasonX[0].teams[0].average.points;
                        ATL.rebounds += seasonX[0].teams[0].average.rebounds;
                        ATL.assists += seasonX[0].teams[0].average.assists;
                        ATL.blocks += seasonX[0].teams[0].average.blocks;
                        ATL.steals += seasonX[0].teams[0].average.steals;
                        ATL.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Bulls": 
                        CHI.points += seasonX[0].teams[0].average.points;
                        CHI.rebounds += seasonX[0].teams[0].average.rebounds;
                        CHI.assists += seasonX[0].teams[0].average.assists;
                        CHI.blocks += seasonX[0].teams[0].average.blocks;
                        CHI.steals += seasonX[0].teams[0].average.steals;
                        CHI.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Kings": 
                        SAC.points += seasonX[0].teams[0].average.points;
                        SAC.rebounds += seasonX[0].teams[0].average.rebounds;
                        SAC.assists += seasonX[0].teams[0].average.assists;
                        SAC.blocks += seasonX[0].teams[0].average.blocks;
                        SAC.steals += seasonX[0].teams[0].average.steals;
                        SAC.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Pistons": 
                        DET.points += seasonX[0].teams[0].average.points;
                        DET.rebounds += seasonX[0].teams[0].average.rebounds;
                        DET.assists += seasonX[0].teams[0].average.assists;
                        DET.blocks += seasonX[0].teams[0].average.blocks;
                        DET.steals += seasonX[0].teams[0].average.steals;
                        DET.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Nets": 
                        BKN.points += seasonX[0].teams[0].average.points;
                        BKN.rebounds += seasonX[0].teams[0].average.rebounds;
                        BKN.assists += seasonX[0].teams[0].average.assists;
                        BKN.blocks += seasonX[0].teams[0].average.blocks;
                        BKN.steals += seasonX[0].teams[0].average.steals;
                        BKN.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Thunder": 
                        OKC.points += seasonX[0].teams[0].average.points;
                        OKC.rebounds += seasonX[0].teams[0].average.rebounds;
                        OKC.assists += seasonX[0].teams[0].average.assists;
                        OKC.blocks += seasonX[0].teams[0].average.blocks;
                        OKC.steals += seasonX[0].teams[0].average.steals;
                        OKC.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Heat": 
                        MIA.points += seasonX[0].teams[0].average.points;
                        MIA.rebounds += seasonX[0].teams[0].average.rebounds;
                        MIA.assists += seasonX[0].teams[0].average.assists;
                        MIA.blocks += seasonX[0].teams[0].average.blocks;
                        MIA.steals += seasonX[0].teams[0].average.steals;
                        MIA.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Mavericks": 
                        DAL.points += seasonX[0].teams[0].average.points;
                        DAL.rebounds += seasonX[0].teams[0].average.rebounds;
                        DAL.assists += seasonX[0].teams[0].average.assists;
                        DAL.blocks += seasonX[0].teams[0].average.blocks;
                        DAL.steals += seasonX[0].teams[0].average.steals;
                        DAL.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Jazz": 
                        UTA.points += seasonX[0].teams[0].average.points;
                        UTA.rebounds += seasonX[0].teams[0].average.rebounds;
                        UTA.assists += seasonX[0].teams[0].average.assists;
                        UTA.blocks += seasonX[0].teams[0].average.blocks;
                        UTA.steals += seasonX[0].teams[0].average.steals;
                        UTA.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Hornets": 
                        CHA.points += seasonX[0].teams[0].average.points;
                        CHA.rebounds += seasonX[0].teams[0].average.rebounds;
                        CHA.assists += seasonX[0].teams[0].average.assists;
                        CHA.blocks += seasonX[0].teams[0].average.blocks;
                        CHA.steals += seasonX[0].teams[0].average.steals;
                        CHA.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Spurs": 
                        SAN.points += seasonX[0].teams[0].average.points;
                        SAN.rebounds += seasonX[0].teams[0].average.rebounds;  
                        SAN.assists += seasonX[0].teams[0].average.assists;
                        SAN.blocks += seasonX[0].teams[0].average.blocks;
                        SAN.steals += seasonX[0].teams[0].average.steals;
                        SAN.turnovers += seasonX[0].teams[0].average.turnovers; 
                    break;

                    case "Nuggets": 
                        DEN.points += seasonX[0].teams[0].average.points;
                        DEN.rebounds += seasonX[0].teams[0].average.rebounds;
                        DEN.assists += seasonX[0].teams[0].average.assists;
                        DEN.blocks += seasonX[0].teams[0].average.blocks;
                        DEN.steals += seasonX[0].teams[0].average.steals;
                        DEN.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Clippers": 
                        LAC.points += seasonX[0].teams[0].average.points;
                        LAC.rebounds += seasonX[0].teams[0].average.rebounds;
                        LAC.assists += seasonX[0].teams[0].average.assists;
                        LAC.blocks += seasonX[0].teams[0].average.blocks;
                        LAC.steals += seasonX[0].teams[0].average.steals;
                        LAC.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Rockets":
                        ROC.points += seasonX[0].teams[0].average.points;
                        ROC.rebounds += seasonX[0].teams[0].average.rebounds;
                        ROC.assists += seasonX[0].teams[0].average.assists;
                        ROC.blocks += seasonX[0].teams[0].average.blocks;
                        ROC.steals += seasonX[0].teams[0].average.steals;
                        ROC.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Timberwolves": 
                        MIN.points += seasonX[0].teams[0].average.points;
                        MIN.rebounds += seasonX[0].teams[0].average.rebounds;
                        MIN.assists += seasonX[0].teams[0].average.assists;
                        MIN.blocks += seasonX[0].teams[0].average.blocks;
                        MIN.steals += seasonX[0].teams[0].average.steals;
                        MIN.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;

                    case "Wizards": 
                        WAS.points += seasonX[0].teams[0].average.points;
                        WAS.rebounds += seasonX[0].teams[0].average.rebounds;
                        WAS.assists += seasonX[0].teams[0].average.assists;
                        WAS.blocks += seasonX[0].teams[0].average.blocks;
                        WAS.steals += seasonX[0].teams[0].average.steals;
                        WAS.turnovers += seasonX[0].teams[0].average.turnovers;
                    break;
                    default: console.log("Nobody " + dbPlayer.player_name);
                };
            };

            });            
            
            leagueArray.push(ROC, NYK, CLE, BOS, POR, GSW, IND, ORL, TOR, PHI, MEM, MIL, NOR, PHX, LAL, ATL, CHI, SAC, DET, BKN, OKC, MIA, DAL, UTA, CHA, SAN, DEN, LAC, MIN, WAS);
            // console.log(leagueArray);

            var leagueObject = {
                league: leagueArray
            };
            res.send(leagueObject);
            
            });
        });
    

// get all players of one team from the db... working with hardcoded team
app.get("/team/:myTeam", function(req, res) {

        var incomingTeam = req.params.myTeam;
        console.log(".... in server ....");
        console.log(req.params.myTeam);
        var teamArray = [];
        var points, rebounds, assists, blocks, steals, turnovers;
    db.sequelize.query("SELECT * FROM `players` WHERE team = ? ", { replacements: [incomingTeam], type: db.sequelize.QueryTypes.SELECT})
      .then(dbTeam => {
        

        dbTeam.forEach(dbPlayers => {
            var seasonX = JSON.parse(dbPlayers.seasons);
            if(dbPlayers.seasons){
                // path for Veterans that have data
                points = seasonX[0].teams[0].average.points;
                rebounds = seasonX[0].teams[0].average.rebounds;
                assists = seasonX[0].teams[0].average.assists;
                blocks = seasonX[0].teams[0].average.blocks;
                steals = seasonX[0].teams[0].average.steals;
                turnovers = seasonX[0].teams[0].average.turnovers;
            }
            else
            {
                // path for Noobs with no NBA experience
                points = "-";
                rebounds = "-";
                assists = "-";
                blocks = "-";
                steals = "-";
                turnovers = "-";
            };
            var playerObject = {
                name: dbPlayers.player_name,
                status: dbPlayers.status,
                position: dbPlayers.primary_position,
                experience: dbPlayers.experience,
                ppg: points,
                rpg: rebounds,
                apg: assists,
                blocks: blocks,
                steals: steals,
                turnovers: turnovers 
            };

            teamArray.push(playerObject);            
        });

        var teamObject = {
                team: incomingTeam,
                players: teamArray
            };
            res.send(teamObject);
    })

  });    

// get all players from the db
app.get("/players", function(req, res) {
  // console.log(db);
        db.players.findAll({}).then(function(dbPlayers) {
            var playersObject = {
                players: dbPlayers
            };
            res.send(playersObject);
        });
    });


app.post("/oneplayer/:playerteam", function(req,res) {

    db.player.update(teamPlayer, {
        where: { 
        }
    }).then(function(dbUser) {
        console.log(dbUser);
        res.send(dbUser);
    });
});

// app.post("/api", function(req, res) {
//         console.log(req.body);
//         console.log("The player is ==> " + req.body.yourBurger);
//         if (req.body.yourBurger != "") {
//             db.burgertoos.create({
//                 burger_name: req.body.yourBurger,
//                 devoured: false
//             }).then(function() {
//                 res.redirect("/");
//             });
//         };
//     });


// get a single player from the db 
  app.get("/oneplayer/:player", function(req, res) {
    db.players.findOne({
      where: {
        player_name: req.params.player
      }
    })
    .then(dbPlayer => {

        var playerName = dbPlayer.player_name;
        var playerStatus = dbPlayer.status;
        var playerTeam = dbPlayer.team;
        var playerPosition = dbPlayer.primary_position;
        var playerExperience = dbPlayer.experience;

        var seasonX = JSON.parse(dbPlayer.seasons);

        var playerPPG = seasonX[0].teams[0].average.points;
        var playerRPG = seasonX[0].teams[0].average.rebounds;
        var playerAPG = seasonX[0].teams[0].average.assists;
        var playerBPG = seasonX[0].teams[0].average.blocks;
        var playerSPG = seasonX[0].teams[0].average.steals;
        var playerTOPG = seasonX[0].teams[0].average.turnovers;

        var playerObject = {
                name: playerName,
                status: playerStatus,
                team: playerTeam,
                position: playerPosition,
                experience: playerExperience,
                ppg: playerPPG,
                rpg: playerRPG,
                apg: playerAPG,
                bpg: playerBPG,
                spg: playerSPG,
                topg: playerTOPG 
            };
      res.send(playerObject);
    });
  });




    




    






// // route to get my articles from Mongo
// app.get("/api", function(req, res) {

//   // We will find all the records, sort it in descending order, then limit the records to 5
//   Article.find({}).exec(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });




// // This is the route we will send POST requests to save each search.
// app.post("/api", function(req, res) {
//   console.log("BODY: " + req.body.location);

//   // Here we'll save the location based on the JSON input.
//   // We'll use Date.now() to always get the current date time
//   History.create({
//     location: req.body.location,
//     date: Date.now()
//   }, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Saved Search");
//     }
//   });
// });

// -------------------------------------------------

// db.sequelize.query("SELECT * FROM `players`", { type: db.sequelize.QueryTypes.SELECT})
    //   .then(players => {
    //     console.log("Number of players =====> " + players.length);
    //     console.log(players[0].player_name);
    //     console.log(players[0].team);
    //     var seasonX = JSON.parse(players[0].seasons);
    //     console.log("seasonX ======================================>");       
    //     console.log(seasonX[0]);
    //     console.log("seasonX 2016 teams ======================================>");
    //     console.log(seasonX[0].teams);
    //     console.log("seasonX 2016 ppg ======================================>");
    //     console.log(seasonX[0].teams[0].average.points);
    //     console.log("seasonX 2016 rpg ======================================>");
    //     console.log(seasonX[0].teams[0].average.rebounds);
    //     console.log("seasonX 2016 assists ======================================>");
    //     console.log(seasonX[0].teams[0].average.assists);
    //     console.log("seasonX 2016 blocks ======================================>");
    //     console.log(seasonX[0].teams[0].average.blocks);
    //     console.log("seasonX 2016 steals ======================================>");
    //     console.log(seasonX[0].teams[0].average.steals);
    //     console.log("seasonX 2016 turnovers ======================================>");
    //     console.log(seasonX[0].teams[0].average.turnovers);



        
    //   })

    //     // db.players.findAll({}).then(function(dbPlayers) {
    //     //     var playersObject = {
    //     //         players: dbPlayers
    //     //     };
    //     //     res.send(playersObject);
    //     // });


    // path for Veterans that have data                
                // points += seasonX[0].teams[0].average.points;
                // rebounds += seasonX[0].teams[0].average.rebounds;
                // assists += seasonX[0].teams[0].average.assists;
                // blocks += seasonX[0].teams[0].average.blocks;
                // steals += seasonX[0].teams[0].average.steals;
                // turnovers += seasonX[0].teams[0].average.turnovers;


                 // var playerObject = {
            //     team: team,
            //     ppg: points.toFixed(1),
            //     rpg: rebounds.toFixed(1),
            //     apg: assists.toFixed(1),
            //     blocks: blocks.toFixed(1),
            //     steals: steals.toFixed(1),
            //     turnovers: turnovers.toFixed(1)


// ------------------------------------------------------------------------------


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
