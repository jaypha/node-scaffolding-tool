#!/usr/bin/env node
//----------------------------------------------------------------------------
// Main entry file
//----------------------------------------------------------------------------

const prog = require('caporal');
const createCmd = require('./lib/create');

prog
  .version('1.0.0')
  .command('create', 'Create a new application')
  .argument('<template>', 'Template to use')
  .argument('[dir]', 'Directory name', /.*/, '.')
  .option('--variant <variant>', 'Which <variant> of the template is going to be created')
  .action(createCmd);
//  .action((args, options, logger) => {
//    console.log(args);
//    console.log(options);
//  });

prog.parse(process.argv);

//----------------------------------------------------------------------------
// Derived (modified) from code generated by Sitepoint.
