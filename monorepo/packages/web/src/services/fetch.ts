import { FetchType } from '@/models/fetch';
import axios from 'axios';

export async function getData<T>({
	path,
	headers = {
		'Content-Type': 'application/json',
	},
	params = {},
}: FetchType): Promise<T> {
	const { data } = await axios.get(path, {
		headers: {
			...headers,
		},
		params,
	});
	return data;
}
