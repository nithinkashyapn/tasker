const Prisma = require('@prisma/client');
const prisma = new Prisma.PrismaClient();
const timeHelper = require('./time');

// Export object
var prismaHelper = {};

prismaHelper.createTask = async (taskId, threshold, duration) => {
    return await prisma.task.create({
        data: {
            taskId,
            threshold,
            duration
        }
    });
};

prismaHelper.readTask = async (name) => {
    console.log('TODO');
};

prismaHelper.incrementCount = async (taskId, timestamp) => {
    let datetime = new Date(timestamp);
    let year = datetime.getUTCFullYear();
    let month = datetime.getUTCMonth();
    let date = datetime.getUTCDate();
    let minute = datetime.getUTCMinutes();
    let hour = datetime.getUTCHours();

    let hash = timeHelper.hashTimeString(timestamp);

    return await prisma.count.upsert({
        where: {
            hash
        },
        create: {
            taskId,
            year,
            date,
            hour,
            minute,
            month,
            hash
        },
        update: {
            count: {
                increment: 1
            }
        }
    });
};

// Export functions
module.exports = prismaHelper;
