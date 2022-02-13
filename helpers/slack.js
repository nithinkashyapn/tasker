// Require as Common JS:
const SlackNotify = require('slack-notify');

// Export object
var slackHelper = {};

slackHelper.sendMessage = (message) => {
    let slack = SlackNotify(
        'https://hooks.slack.com/services/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'
    );
    slack.send(message);
};

// Export functions
module.exports = slackHelper;
