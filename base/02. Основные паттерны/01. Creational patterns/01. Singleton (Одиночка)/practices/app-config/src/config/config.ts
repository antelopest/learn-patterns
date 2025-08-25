export default class Config {
    private static instance: Config;

    public readonly apiUrl: string;
    public readonly port: number;
    public readonly mode: "development" | "production";

    private constructor() {
        /* These values need to take form process.env or config file */
        this.apiUrl = "http://localhost:3000";
        this.port = 3000;
        this.mode = "development";
    }

    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    public printConfig() {
        console.log("App Config:");
        console.log(`API URL: ${this.apiUrl}`);
        console.log(`Port: ${this.port}`);
        console.log(`Mode: ${this.mode}`);
    }
}
