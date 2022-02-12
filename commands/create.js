const chalk = require('chalk');
const clitable = require('cli-table');
const database = require('../helpers/database');

function create(name) {
    if (typeof database.getTask(name) == 'undefined') {
        database.createTask(name);
        const data = database.getTask(name);
        let table = new clitable();
        table.push({ Name: data['name'] }, { Key: data['key'] });
        console.log(
            chalk.green.bold(`Task ${name} has been created successfully!`)
        );
        console.log(table.toString());
    } else {
        console.log(chalk.red.bold(`Task ${name} already exists.`));
    }
}

module.exports = create;
