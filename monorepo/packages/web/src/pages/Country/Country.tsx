import React from 'react';
import './Country.css';
import { useFetch } from '@/hooks/useFetch';
import { Container } from '@/components/Container';
import { Table } from '@/components/Table';

export type CountryProps = Record<string, never>;

const Country: React.FC<CountryProps> = () => {
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
						pais: 'Pais',
						nompais: 'Nombre',
					}}
				/>
			</Container>
		</>
	);
};

export default Country;
