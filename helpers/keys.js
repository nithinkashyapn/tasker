const Keyv = require('keyv');
const keyv = new Keyv();

// Export object
var keysHelper = {};

keysHelper.set = async (name, value, ttl = true) => {
    return await keyv.set(name, value, ttl ? 60 * 1000 : 'never expires');
};

keysHelper.get = async (name) => {
    return await keyv.get(name);
};

keysHelper.increment = async (taskId, timestamp) => {
    let hash = timeHelper.hashTimeString(timestamp, taskId);
    let currentValue = (await keyv.get(hash)) || 0;
    return await keyv.set(hash, ++currentValue, false);
};

// Export functions
module.exports = keysHelper;
