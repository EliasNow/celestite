// generated by sapper build at 2020-04-03T06:16:58.215Z
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || 4000;

console.log('Starting server on port ' + process.env.PORT);
require('./server/server.js');