export const ENV_VARS = {
	API_PORT: process.env.API_PORT ?? 3000,
	DB_HOST: process.env.DB_HOST ?? 'localhost',
	DB_PORT: Number(process.env.DB_PORT ?? 3306),
	DB_NAME: process.env.DB_NAME ?? 'test',
	DB_PASSWORD: process.env.DB_PASSWORD ?? 'root',
	DB_USER: process.env.DB_USER ?? 'root',
	DB_CONNECTION_LIMIT: Number(process.env.DB_CONNECTION_LIMIT ?? 10),
};

console.log('ENV_VARS: ', ENV_VARS);
