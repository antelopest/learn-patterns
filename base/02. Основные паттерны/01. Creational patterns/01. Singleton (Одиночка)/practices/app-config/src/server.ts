import Config from './config/config';

const config = Config.getInstance();

if (config.mode === 'development') {
    console.log('Running in development mode');
}