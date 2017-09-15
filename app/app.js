// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Main Component
var Main = require("./components/Main");

// Grabs the Routes
var routes = require("./config/routes"); 

// This code here allows us to render our main component (in this case Main)
// ReactDOM.render(<Main />, document.getElementById("app"));
ReactDOM.render(routes, document.getElementById("app"));