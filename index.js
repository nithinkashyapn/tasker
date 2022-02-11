#! /usr/bin/env node
const { Command } = require('commander');
const program = new Command();

const help = require('./commands/help');

program
    .name('tasker')
    .description('Your self-hosted task monitoring service')
    .version('1.0');

program.command('help').description('We are always here for you').action(help);

program.parse();
