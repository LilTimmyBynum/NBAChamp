// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
// var Scrape = require("../components/children/Scrape");
// var Myarticles = require("../components/children/Myarticles");
// var Notes = require("../components/children/grandchildren/Notes");
// var GrandChild2 = require("../components/children/grandchildren/GrandChild2");

// var History = require("../components/children/History");

var Admin = require("../components/children/Admin");
var User = require("../components/children/User");
var HomeTeam = require("../components/children/HomeTeamCarousel");

var AdminLeague = require("../components/children/Adminchildren/AdminLeague");
var AdminTeam = require("../components/children/Adminchildren/AdminTeam");
var AdminPlayer = require("../components/children/Adminchildren/AdminPlayer");


// import {User} from "../components/children/User";   // this doesn't work.....

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    {/* If user selects Admin then show the appropriate component*/}
      <Route path="Admin" component={Admin}/>

    {/* If user selects League or Team or Player from the Admin window then show the appropriate component*/}
      <Route path="AdminLeague" component={AdminLeague} />
      <Route path="AdminTeam" component={AdminTeam} />    
      <Route path="AdminPlayer" component={AdminPlayer} />

      

    {/* If user selects User then show the appropriate component*/}
      <Route path="User" component={User} />


      

             
      

      {/* If user selects any other path... we get the Home Route 
      <IndexRoute component={Myarticles} />  */}

    </Route>
  </Router>
);