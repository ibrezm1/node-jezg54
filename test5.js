const winston = require('winston');

class Logger {
  logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'user-service' },
      transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    });
  }
  info(message) {
    this.logger.info(message);
  }
}
//https://bobbyhadz.com/blog/javascript-uncaught-syntaxerror-unexpected-token-export
module.exports = Logger;
