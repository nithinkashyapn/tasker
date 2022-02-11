#! /usr/bin/env node
const { Command } = require('commander');
const program = new Command();

const help = require('./commands/help');
const start = require('./commands/start');
const stop = require('./commands/stop');

program
    .name('tasker')
    .description('Your self-hosted task monitoring service')
    .version('1.0');

program.command('start').description('Start Tasker').action(start);
program.command('stop').description('Stop Tasker').action(stop);
program.command('help').description('We are always here for you').action(help);

program.parse();
