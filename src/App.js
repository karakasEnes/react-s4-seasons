import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Err: {this.state.errorMessage}</div>;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">this.renderContent()</div>;
  }
}

export default App;
