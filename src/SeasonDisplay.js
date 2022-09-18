import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    message: "Let's hit the beach",
    iconName: 'sun'
  },
  winter: {
    message: "Burr, it's chilly",
    iconName: 'snowflake'
  },
  unknown: {
    message: "Season is unknown",
    iconName: "question circle outline"
  },
};

const getSeason = (lat, month) => {
  if (lat === null) {
    return 'unknown';
  }
  if (month > 2 || month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = ({lat, status}) => {
  let iconName, message, season;
  if (status?.code === 2) {
    season = getSeason(lat, new Date().getMonth());
    const config = seasonConfig[season];
    iconName = config.iconName;
    message = config.message;
  } else {
    iconName = 'question circle outline';
    message = status?.text || 'Season is unknown';
    season = null;
  }

  return <div className={`season-display ${season}`}>
    <i className={`icon-left massive ${iconName} icon`} />
    <h1>{message}</h1>
    <i className={`icon-right massive ${iconName} icon`} />
  </div>;
}

export default SeasonDisplay;
