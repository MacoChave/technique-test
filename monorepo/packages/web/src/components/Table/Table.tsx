import React from 'react';
import './Table.css';

export type TableProps = {
	rows: object[];
	headers: object;
	onSelect?: (row: object) => void;
};

const Table: React.FC<TableProps> = ({
	rows,
	headers,
	onSelect = undefined,
}) => {
	return (
		<>
			<table className='table'>
				<thead className='header'>
					<tr className='row'>
						{Object.entries(headers).map(([key, value]) => (
							<th className='cell' key={key}>
								{value}
							</th>
						))}
					</tr>
				</thead>
				<tbody className='body'>
					{rows.map((row, index) => (
						<tr
							className='row'
							key={index}
							onClick={() => onSelect && onSelect(row)}>
							{Object.keys(headers).map((key, index) => (
								<td className='cell' key={index}>
									{row[key as keyof typeof row]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
