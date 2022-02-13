// Export object
var timeHelper = {};

timeHelper.getTimeString = (timestamp) => {
    let dt = new Date(timestamp);
    return (
        `0${dt.getUTCHours()}`.slice(-2) +
        '_' +
        `0${dt.getUTCMinutes()}`.slice(-2)
    );
};

// Export functions
module.exports = timeHelper;
