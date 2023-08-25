import React from 'react';
import './Container.css';

export type ContainerProps = {
	title: string;
	children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ title, children }) => {
	return (
		<>
			<div className='container'>
				<h2 className='title'>{title}</h2>
				<div className='content'>{children}</div>
			</div>
		</>
	);
};

export default Container;
