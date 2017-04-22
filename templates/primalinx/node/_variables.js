/*
 * Variables to replace
 * --------------------
 * They are asked to the user as they appear here, but hey will be
 * searched in uppercase and inside brackets ([VARIABLE]) in the
 * template files
 */

module.exports = 
[
  { name: 'name', required: true },
  { name: 'description' },
  { name: 'author', default: 'Jason den Dulk' },
  { name: 'copyright', default 'Prima Health Solutions Pty Ltd. All rights reserved.' }
];
