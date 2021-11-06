import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      function (pos) {
        console.log(pos.coords);
        return <div>{pos.coords.latitude}</div>;
      },
      function (err) {
        console.log(err);
        return <div>Nowhere</div>;
      }
    );

    return <div>Test</div>;
  }
}

export default App;
