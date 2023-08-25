import { Request, Response } from 'express';
import { errorHandler } from '../utils/errors';
import {
	execDelete,
	execInsert,
	execSelect,
	execSelectOne,
	execUpdate,
} from '../db/querys';

export const getItem = async ({ query }: Request, res: Response) => {
	try {
		const result = await execSelectOne({
			table: 'pais',
			...query,
		});
		res.status(200).json(result);
	} catch (error) {
		errorHandler(res, { error, message: 'Error getting item', code: 500 });
	}
};

export const getItems = async ({ query }: Request, res: Response) => {
	try {
		const result = await execSelect({
			table: 'pais',
			...query,
		});
		res.status(200).json(result);
	} catch (error) {
		errorHandler(res, { error, message: 'Error getting item', code: 500 });
	}
};

export const postItem = async ({ body }: Request, res: Response) => {
	try {
		const result = await execInsert({
			table: 'pais',
			data: body,
		});
		res.status(200).json(result);
	} catch (error) {
		errorHandler(res, { error, message: 'Error getting item', code: 500 });
	}
};

export const putItem = async ({ query, body }: Request, res: Response) => {
	try {
		const result = await execUpdate({
			table: 'pais',
			data: body,
			query,
		});
		res.status(200).json(result);
	} catch (error) {
		errorHandler(res, { error, message: 'Error getting item', code: 500 });
	}
};

export const deleteItem = async ({ query }: Request, res: Response) => {
	try {
		const result = await execDelete({
			table: 'pais',
			query,
		});
		res.status(200).json(result);
	} catch (error) {
		errorHandler(res, { error, message: 'Error getting item', code: 500 });
	}
};
