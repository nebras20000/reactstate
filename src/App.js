import React from "react";
class App extends React.Component {
  state = {
    fullname: "Sara",
    bio: "i am sara",
    imgsrc:
      "data:image/jpeg;base64,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",
    profession: "we dont know",
    show: true,
    time: 0,
  };
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ time: this.state.time + 1 }),
      1000
    );
  }

  render() {
    return (
      <div>
        {this.state.show ? (
          <div>
            <h1>hello {this.state.fullname}</h1>
            <h1>hello {this.state.bio}</h1>
            <img src={this.state.imgsrc}></img>
            <h1>profession: {this.state.profession}</h1>
          </div>
        ) : null}
        <button onClick={this.handleClick}>click me</button>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}
export default App;
