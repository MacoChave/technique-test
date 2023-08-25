import { TypeWithKey } from './typeWithKey';

export type FetchType = {
	path: string;
	body?: any;
	params?: TypeWithKey<any>;
	headers?: TypeWithKey<string>;
};
