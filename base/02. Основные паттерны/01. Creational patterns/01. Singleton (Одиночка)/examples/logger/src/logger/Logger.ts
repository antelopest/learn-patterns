export default class Logger {
    private static logger: Logger;

    private constructor() {
    }

    public static getLogger(): Logger {
        if (!Logger.logger) {
            Logger.logger = new Logger();
        }

        return Logger.logger;
    }

    public info(message: string): void {
        console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    }

    public warn(message: string): void {
        console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
    }

    public error(message: string): void {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    }
}