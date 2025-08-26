import Logger from "./logger/Logger";

const logger = Logger.getLogger();
const logger1 = Logger.getLogger();

console.log(logger === logger1);

logger.info('Application started!');
logger1.warn('Low disk space');
logger.error('Unhandled exception');