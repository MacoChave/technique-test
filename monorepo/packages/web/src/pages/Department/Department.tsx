import React from 'react';
import './Department.css';
import { useFetch } from '@/hooks/useFetch';
import { Container } from '@/components/Container';
import { Table } from '@/components/Table';

export type DepartmentProps = Record<string, never>;

const Department: React.FC<DepartmentProps> = () => {
	const { data, isLoading, isError } = useFetch({
		path: '/api/country/all',
		params: {},
	});
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;

	return (
		<>
			<Container title='Departamento'>
				<Table
					rows={data}
					headers={{
						pais: 'Pais',
						depto: 'Departamento',
						nomdepto: 'Departamento',
					}}
				/>
			</Container>
		</>
	);
};

export default Department;
