import { conditionType } from '../models/mysql';

export const getWhereClause = (query: Object) => {
	const values: any[] = [];

	const where = Object.entries(query)
		.map(([key, value]) => {
			values.push(value);
			return `${key} = ?`;
		})
		.join(' AND ');
	return [where, values];
};

export const getWhereClauseFromConditions = (conditions: conditionType[]) => {
	const values: any[] = [];

	const where = conditions
		.map(({ column, value, operator }) => {
			values.push(value);
			return `${column} ${operator} ?`;
		})
		.join(' OR ');
	return [where, values];
};

export const getSortClause = (sort: Object) => {
	const sortClause = Object.entries(sort)
		.map(([key, value]) => {
			return `${key} ${value}`;
		})
		.join(', ');
	return sortClause;
};

export const getLimitClause = (limit: number, offset: number) => {
	return `LIMIT ${offset}, ${limit}`;
};

export const getSetClause = (data: Object) => {
	const values: any[] = [];

	const setClause = Object.entries(data)
		.map(([key, value]) => {
			values.push(value);
			return `${key} = ?`;
		})
		.join(', ');
	return [setClause, values];
};
