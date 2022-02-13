// Require environmental variables
const env = require('./environment');
const database = require('./helpers/database.js');
const cronJobs = require('./schedules/cron');
const prismaHelper = require('./helpers/prisma.js');

// Required modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Initialize server and prepare database
const app = express();
database.init();
cronJobs.iterateAndCheck();
// prismaHelper.getAllTaskIds();

// Basic express config
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(require('./routes'));

// Start server
app.listen(env.TASKER_PORT, () => {
    console.log(`Tasker is running on port ${env.TASKER_PORT}`);
});
