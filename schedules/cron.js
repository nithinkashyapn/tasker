var cron = require('node-cron');
const Prisma = require('@prisma/client');
const prisma = new Prisma.PrismaClient();
const prismaHelper = require('../helpers/prisma');
const timeHelper = require('../helpers/time');
const slackHelper = require('../helpers/slack');

// Export object
var schedules = {};

schedules.iterateAndCheck = async () => {
    // cron.schedule('* * * * *', () => {
    let timestamp = Date.now();
    let tasks = await prismaHelper.getAllTaskIds();
    console.log(tasks);
    tasks.forEach(async (task) => {
        let tempStore = await prisma.count.findUnique({
            where: {
                hash: timeHelper.hashTimeString(timestamp, task['taskId'])
            }
        });
        if (tempStore) {
            console.log('tempStore YES', tempStore);
        } else {
            console.log('tempStore', tempStore);
            slackHelper.sendMessage(
                `No events were triggered for ${
                    task['taskId']
                } during ${timestamp.toLocaleString()}`
            );
        }
    });
    // });
};

// Export functions
module.exports = schedules;
