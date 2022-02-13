const md5 = require('md5');

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

timeHelper.hashTimeString = (timestamp, taskId = '') => {
    let datetime = new Date(timestamp);
    let date = datetime.getUTCDate();
    let hour = datetime.getUTCHours();
    let minute = datetime.getUTCMinutes();
    let year = datetime.getUTCFullYear();
    let month = datetime.getUTCMonth();

    return md5(`${taskId}_${year}_${month}_${date}_${hour}_${minute}`);
};

// Export functions
module.exports = timeHelper;
