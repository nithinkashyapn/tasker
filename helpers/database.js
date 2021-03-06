const low = require('lowdb');
const nanoid = require('nanoid');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database/db.json');
const db = low(adapter);

// Export object
var databaseHelper = {};

databaseHelper.init = async () => {
    await db.defaults({ tasks: [] }).write();
};

databaseHelper.createTask = (name) => {
    return db
        .get('tasks')
        .push({
            name,
            key: nanoid.nanoid(30),
            taskId: nanoid.nanoid(30),
            threshold: 100,
            duration: 60,
            slackChannel: 'TODO',
            active: true
        })
        .write();
};

databaseHelper.getTask = (name) => {
    return db.get('tasks').find({ name }).value();
};

databaseHelper.getAllTasks = () => {
    return db.get('tasks').filter({ active: true }).value();
};

databaseHelper.getTaskById = (taskId) => {
    return db.get('tasks').find({ taskId }).value();
};

// Export functions
module.exports = databaseHelper;
