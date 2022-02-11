// Required modules
const router = require('express').Router();

// Controllers
const taskController = require('../controllers/task');

router.get('/:taskId', taskController.ingest);

module.exports = router;
