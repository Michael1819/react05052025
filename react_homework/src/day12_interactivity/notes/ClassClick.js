const { Component } = require("react");

class ClassClick extends Component {
  clickhandler() {
    console.log("Click this button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>click me</button>
      </div>
    );
  }
}
