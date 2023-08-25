import cors from 'cors';
import express from 'express';

import { Workspace } from 'types';

const app = express();
const port = 5000;

app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);

app.get('/workspaces', (_, response) => {
	const workspaces: Workspace[] = [
		{
			id: '1',
			name: 'api',
			version: '1.0.0',
		},
		{
			id: '2',
			name: 'types',
			version: '1.0.0',
		},
		{
			id: '3',
			name: 'web',
			version: '1.0.0',
		},
	];

	response.json({ data: workspaces });
});

app.listen(port, () => {
	console.log(`API listening at http://localhost:${port}`);
});
