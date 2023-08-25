import { connection } from '../config/mysql';
import {
	deleteType,
	execType,
	insertType,
	selectType,
	updateType,
} from '../models/mysql';
import {
	getSetClause,
	getSortClause,
	getWhereClause,
	getWhereClauseFromConditions,
} from '../utils/db';

export const execQuery = async ({ sql, values = [] }: execType) => {
	const conn = await connection();
	const [results, fields] = await conn.query(sql, values);
	return results;
};

export const execSelect = async ({
	table,
	columns = [],
	query = {},
	sort = {},
	limit = NaN,
	offset = NaN,
	conditions = [],
	q = undefined,
	pageNumber = NaN,
	pageSize = NaN,
}: selectType) => {
	const sqlConds = [];
	const sqlValues = [];

	let sql: string = `SELECT ${
		columns.length ? columns.join(', ') : '*'
	} FROM ${table}`;

	if (conditions.length) {
		const [where, values] = getWhereClauseFromConditions(conditions);
		sqlConds.push(`(${where})`);
		sqlValues.push(...values);
	}

	const sortClause = getSortClause(sort);

	if (sqlConds.length) {
		sql += ` WHERE ${sqlConds.join(' AND ')}`;
	}

	if (sortClause) {
		sql += ` ORDER BY ${sortClause}`;
	}

	if (pageNumber && pageSize) {
		sql += ` LIMIT ${(pageNumber - 1) * pageSize}, ${pageSize}`;
	} else {
		if (limit) {
			sql += ` LIMIT ${limit}`;
		}

		if (offset) {
			sql += ` OFFSET ${offset}`;
		}
	}

	const conn = await connection();
	const [results, fields] = await conn.query(sql, sqlValues);
	conn.end();
	return results;
};

export const execSelectOne = async ({
	table,
	columns = [],
	query = {},
	sort = {},
}: selectType) => {
	const results: any = await execSelect({
		table,
		columns,
		query,
		sort,
		limit: 1,
		offset: 0,
	});
	return results[0];
};

export const execInsert = async ({ table, data }: insertType) => {
	const keys = Object.keys(data);
	const values = Object.values(data);

	const sql: string = `INSERT INTO ${table} (${keys.join(
		', '
	)}) VALUES (${keys.map(() => '?').join(', ')})`;

	const conn = await connection();
	const [results, fields] = await conn.query(sql, values);
	conn.end();
	return results;
};

export const execUpdate = async ({ table, data, query }: updateType) => {
	const [set, values] = getSetClause(data);
	const [where, whereValues] = getWhereClause(query);

	let sql: string = `UPDATE ${table} SET ${set} WHERE ${where}`;

	const conn = await connection();
	const [results, fields] = await conn.query(sql, [
		...values,
		...whereValues,
	]);
	conn.end();
	return results;
};

export const execDelete = async ({ table, query }: deleteType) => {
	const [where, whereValues] = getWhereClause(query);

	let sql: string = `DELETE FROM ${table} WHERE ${where}`;

	const conn = await connection();
	const [results, fields] = await conn.query(sql, whereValues);
	conn.end();
	return results;
};
