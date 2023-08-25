import cors from 'cors';
import express from 'express';
import { router } from './routes';
import { connection } from './config/mysql';

const app = express();
const port = 5000;

app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);

app.use('/api', router);

app.listen(port, () => {
	console.log(`API listening at http://localhost:${port}`);
});

const DBTestConn = async () => {
	const conn = await connection();
	conn.ping()
		.then(() => {
			console.log('DB connection established');
		})
		.catch((err) => {
			console.error('DB connection failed', err);
		});
};

DBTestConn();
