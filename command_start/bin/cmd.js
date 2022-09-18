#!/home/allen/.volta/bin/node
import { Command } from 'commander'
const program = new Command()
import { help } from '../lib/core/help.js'
help(program)
import {commander} from '../lib/core/commander.js'
commander(program)
program.parse(process.argv)