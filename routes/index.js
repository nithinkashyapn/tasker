// Required modules
const router = require('express').Router();

router.use('/task', require('./task'));

module.exports = router;
