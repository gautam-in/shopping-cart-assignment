const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customformat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = ()=>{
    return createLogger({
        level: 'debug',
        format:combine(format.colorize(),timestamp({format:'HH:mm:ss'}),customformat),
        transports: [
            new transports.Console()
        ],
      });
}

module.exports = logger;
// new winston.transports.File({ filename: 'error.log', level: 'error' }),
// new winston.transports.File({ filename: 'combined.log' }),