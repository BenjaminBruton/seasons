import React from "react";
import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading!</div>;
  }
}

// const container = document.getElementById("app");
// const root = ReactDOMClient.createRoot(container);

// root.render(<App tab="home" />);

ReactDOM.render(<App />, document.querySelector("#root"));
