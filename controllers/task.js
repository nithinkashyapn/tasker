// Required modules
const ingestDataQueue = require('fastq').promise(processIngest, 1);

// Worker Function
async function processIngest(data) {
    await console.log(data);
}

// Export object
var taskController = {};

// Ingest API
taskController.ingest = async (req, res) => {
    await ingestDataQueue.push(req.params.taskId);
    return res.send('ok');
};

// Export functions
module.exports = taskController;
