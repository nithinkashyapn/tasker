const chalk = require('chalk');
const clitable = require('cli-table');
const database = require('../helpers/database');
const prisma = require('../helpers/prisma');

function create(name) {
    if (typeof database.getTask(name) == 'undefined') {
        database.createTask(name);
        const data = database.getTask(name);

        prisma.createTask(data['taskId'], 100, 60);

        let table = new clitable();
        table.push(
            { Name: data['name'] },
            { 'Task Id': data['taskId'] },
            { Key: data['key'] }
        );

        console.log(
            chalk.green.bold(`Task ${name} has been created successfully!`)
        );

        console.log(table.toString());
    } else {
        console.log(chalk.red.bold(`Task ${name} already exists.`));
    }
}

module.exports = create;
