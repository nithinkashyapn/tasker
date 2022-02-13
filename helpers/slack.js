// Require as Common JS:
const SlackNotify = require('slack-notify');
const env = require('../environment');

// Export object
var slackHelper = {};

slackHelper.sendMessage = (message) => {
    let slack = SlackNotify(env.TASKER_SLACK_WEBHOOK);
    slack.send(message);
};

// Export functions
module.exports = slackHelper;
