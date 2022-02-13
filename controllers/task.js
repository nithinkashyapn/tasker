// Required modules
const ingestDataQueue = require('fastq').promise(processIngest, 1);
const databaseHelper = require('../helpers/database');
const keysHelper = require('../helpers/keys');
const _ = require('lodash');

// Worker Function
async function processIngest(data) {
    let taskId = _.get(data, 'taskId');
    let storedTaskKey = await keysHelper.get(taskId);

    if (typeof storedTaskKey == 'undefined') {
        let databaseValues = databaseHelper.getTaskById(taskId);
        let databaseTaskKey = _.get(databaseValues, 'key');
        if (
            typeof databaseValues != 'undefined' &&
            databaseTaskKey === _.get(data, 'key')
        ) {
            await keysHelper.set(taskId, databaseTaskKey);
            storedTaskKey = databaseTaskKey;
        }
    }

    if (typeof storedTaskKey != 'undefined') {
        await keysHelper.increment(taskId, _.get(data, 'timestamp'));
    } else {
        // TODO - Add logging logic
    }
}

// Export object
var taskController = {};

// Ingest API
taskController.ingest = async (req, res) => {
    await ingestDataQueue.push({
        taskId: req.params.taskId,
        key: req.headers['x-tasker-key'] || 'P82S6Qrj67c2mqgy3-KwRF_yI_gD7I',
        timestamp: Date.now()
    });
    return res.send('ok');
};

// Export functions
module.exports = taskController;
