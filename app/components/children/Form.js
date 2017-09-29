// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { team: "" };
  },

  // The moment the page renders do this.......
  componentDidMount: function() {
    console.log("this.props");
    console.log(this.props);




  },

  // componentDidMount: function() {
  //   helpers.getOnePlayer().then(function(response) {
  //     console.log(response);
  //     if (response !== this.state.onePlayer) {
  //       console.log("onePlayer", response.data);
  //       this.setState({ onePlayer: response.data });
  //         console.log(this.state);
  //         this.state.teamString = ("./images/NBA_Logos/" + this.state.onePlayer.team  + ".png");

  //           var tempPlayer = this.state.onePlayer.name;
  //           var realPlayer = tempPlayer.replace(" ", "_");
  //             console.log(realPlayer);

  //           this.state.playerString = ("./images/NBA_Photos/" + realPlayer  + ".png");
          
  //            $("#playerTeam").attr("src", this.state.teamString);
  //            $("#playerPhoto").attr("src", this.state.playerString); 
  //     }
  //   }.bind(this));    
  // },

  // This function will respond to the user input
  handleChange: function(event) {
 
    this.setState({ term: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Location</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.term}
                type="text"
                className="form-control"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
