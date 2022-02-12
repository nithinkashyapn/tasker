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
        .push({ name, key: nanoid.nanoid(30) })
        .write();
};

databaseHelper.getTask = (name) => {
    return db.get('tasks').find({ name }).value();
};

// Export functions
module.exports = databaseHelper;
