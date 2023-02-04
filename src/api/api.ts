const PRODUCTION_MODE = process.env.NODE_ENV === 'production';
const PRODUCTION_HOST = 'api.jakub.app';
const DEVELOPMENT_HOST = 'localhost:1338';

export const ENDPOINT = PRODUCTION_MODE ? PRODUCTION_HOST : DEVELOPMENT_HOST;