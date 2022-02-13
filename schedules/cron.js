var cron = require('node-cron');
const databaseHelper = require('../helpers/database');
const timeHelper = require('../helpers/time');
const slackHelper = require('../helpers/slack');

// Export object
var schedules = {};

schedules.iterateAndCheck = async () => {
    cron.schedule('* * * * *', () => {
        let timestamp = Date.now() - 60000;
        let tasks = databaseHelper.getAllTasks();
        console.log(tasks);
        tasks.forEach(async (task) => {
            let tempStore = databaseHelper.getTask(
                timeHelper.hashTimeString(timestamp, task['taskId'])
            );
            if (typeof tempStore != 'undefined') {
                console.log('tempStore YES', tempStore);
            } else {
                console.log('tempStore', tempStore);
                slackHelper.sendMessage(
                    `No events were registered for ${
                        task['name']
                    } at ${new Date(timestamp)}`
                );
            }
        });
    });
};

// Export functions
module.exports = schedules;
