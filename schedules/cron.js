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
        tasks.forEach(async (task) => {
            let timehash = timeHelper.hashTimeString(timestamp, task['taskId']);
            let tempStore = databaseHelper.getTask(timehash);
            if (typeof tempStore != 'undefined') {
                if (tempStore['threshold'] < task['threshold']) {
                    slackHelper.sendMessage(
                        `Less events were registered for ${
                            task['name']
                        } at ${new Date(timestamp)}. Expected ${
                            task['threshold']
                        } but received ${tempStore['threshold']}`
                    );
                }
                await keysHelper.delete(timehash);
            } else {
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
