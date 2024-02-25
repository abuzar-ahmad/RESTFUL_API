import fs from 'fs';
import winston from 'winston';

// Create a Winston logger with configuration
const logger = winston.createLogger({
    level: 'info', // Log level set to 'info'
    format: winston.format.json(), // Log format as JSON
    defaultMeta: { service: 'request-logging' }, // Default metadata for logs
    transports: [
        // Define a transport for logging to a file named 'logs.txt'
        new winston.transports.File({ filename: 'logs.txt' })
    ],
});

// Middleware function for logging requests
const loggerMiddleware = async (req, res, next) => {
    // Log request body, excluding URLs containing "signin"
    if (!req.url.includes("signin")) {
        // Create a log entry with the request URL and the request body as JSON
        const logData = `${req.url}-${JSON.stringify(req.body)}`;
        
        // Log the data at the 'info' level
        logger.info(logData);
    }
    
    // Continue to the next middleware or route handler
    next();
}

export default loggerMiddleware;
