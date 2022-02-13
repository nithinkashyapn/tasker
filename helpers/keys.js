const Keyv = require('keyv');
const keyv = new Keyv();

// Export object
var keysHelper = {};

keysHelper.set = async (name, value) => {
    return await keyv.set(name, value, 60 * 1000);
};

keysHelper.get = async (name) => {
    return await keyv.get(name);
};

keysHelper.increment = async (name) => {
    let currentValue = (await keyv.get(name)) || 0;
    return await keyv.set(name, ++currentValue);
};

// Export functions
module.exports = keysHelper;
