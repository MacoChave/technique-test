import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFilename = (filename: string): string => {
	return filename.split('.').shift() ?? '';
};

readdirSync(PATH_ROUTER).filter((file) => {
	const cleanedName: string = cleanFilename(file);
	if (cleanedName !== 'index') {
		import(`./${cleanedName}`).then((module) => {
			console.log(`Loaded route: /${cleanedName}`);
			router.use(`/${cleanedName}`, module.router);
		});
	}
});

router.get('/', (req, res) => {
	res.json({ message: 'Hello World' });
});

export { router };
