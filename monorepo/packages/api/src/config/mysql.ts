import { createConnection } from 'mysql2/promise';
import { ENV_VARS } from '../utils/vars';

export const connection = async () => {
	return await createConnection({
		host: ENV_VARS.DB_HOST,
		port: ENV_VARS.DB_PORT,
		user: ENV_VARS.DB_USER,
		password: ENV_VARS.DB_PASSWORD,
		database: ENV_VARS.DB_NAME,
		connectionLimit: ENV_VARS.DB_CONNECTION_LIMIT,
	});
};
