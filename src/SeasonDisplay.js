
const getSeason = (lat, month) => {
  if (month > 2 || month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = props => {
  console.log('season display rendered');
  const {lat} = props;
  const season = getSeason(lat, new Date().getMonth());
  return <div className="season-display">
    Season: {season}. Latitude: {lat}
  </div>;
}

export default SeasonDisplay;
