import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import './App.css';

const statusConfig = {
  error: {
    code: 0,
    text: 'Geolocation is not supported by your browser',
  },
  loading: {
    code: 1,
    text: 'Loading'
  },
  localized: {
    code: 2,
    text: 'Localized'
  },
  positionError: {
    code: 3,
    text: 'Geolocation was blocked by the user'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: null, status: null};
  }

  componentDidMount() {
    if (navigator.geolocation) {
      const status = statusConfig['loading'];
      this.setState({status});
      navigator.geolocation.getCurrentPosition(
        position => {
          const status = statusConfig['localized'];
          this.setState({status, lat: position.coords.latitude})
        },
        positionError => {
          const status = statusConfig['positionError'];
          this.setState({status, text: positionError.message});
        });
    } else {
      const status = statusConfig['error'];
      this.setState({status});
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    const {lat, status} = this.state;
    return (
      <div className="App">
        {status?.code === 1 ? <Spinner message="Please, allow the browser detect your location." /> : <SeasonDisplay lat={lat} status={status} />}
      </div>
    );
  }
}

export default App;
