export type conditionType = {
	column: string;
	value: any;
	operator: string;
};

export type selectType = {
	table: string;
	columns?: string[];
	query?: Object;
	sort?: Object;
	limit?: number;
	offset?: number;
	conditions?: conditionType[];
	q?: any;
	pageNumber?: number;
	pageSize?: number;
};

export type execType = {
	sql: string;
	values?: any[];
};

export type insertType = {
	table: string;
	data: Object | Object[];
};

export type updateType = {
	table: string;
	data: Object;
	query: Object;
	conditions?: conditionType[];
};

export type deleteType = {
	table: string;
	query: Object;
};
