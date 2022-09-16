import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    let status, statusCode;
    if (navigator.geolocation) {
      status = 'Loading';
      statusCode = 1;
    } else {
      status = 'Geolocation is not supported by your browser';
      statusCode = 0;
    }

    this.state = {lat: null, status: status, statusCode: statusCode};
  }

  componentDidMount() {
    if (this.state.statusCode === 1) {
      this.setState({status: 'Locating...'});
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({status: 'Localized', lat: position.coords.latitude})
        },
        positionError => {
          this.setState({status: positionError.message});
        });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    const {status, lat} = this.state;
    return (
      <div className="App">
        Status: {status}
        <SeasonDisplay lat={lat}/>
      </div>
    );
  }
}

export default App;
