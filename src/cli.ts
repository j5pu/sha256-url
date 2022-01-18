#!/usr/bin/env node

import {sha256} from ".";

require('yargs')
    .scriptName("sha256")
    .usage('$0 <url>')
    .command('* <url>', "calculate sha256 from url", (yargs) => {
        yargs.positional('url', {
            demandOption: true,
            describe: "url to calculate sha",
            type: "string",
        })
    }, async function (argv) {
        console.log(await sha256(argv.url))
    })
    .help()
    .argv
