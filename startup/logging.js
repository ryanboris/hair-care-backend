//Logging middleware for in detail errors and uncaught exceptions
//Recorded to the two logfiles at root 
//Useful with async errors especially with promise based OEM and the transfer of data between the API and the database

const winston = require('winston')
require('express-async-errors');

//export winston and set properties for color and filename

module.exports = function() {
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
    
  //throw error on unhandledRejections
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  
  winston.add(winston.transports.File, { filename: 'logfile.log' });