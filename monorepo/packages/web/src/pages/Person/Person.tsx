import React from 'react';
import './Person.css';
import { useFetch } from '@/hooks/useFetch';
import { Container } from '@/components/Container';
import { Table } from '@/components/Table';

export type PersonProps = Record<string, never>;

const Person: React.FC<PersonProps> = () => {
	const { data, isLoading, isError } = useFetch({
		path: '/api/country/all',
		params: {},
	});
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;

	return (
		<>
			<Container title='Paises'>
				<Table
					rows={data}
					headers={{
						nombre: 'Nombre',
						pais: 'Pais',
						departamento: 'Departamento',
						direccion: 'Direccion',
					}}
				/>
			</Container>
		</>
	);
};

export default Person;
