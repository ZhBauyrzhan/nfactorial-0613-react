import React from 'react';

export const Photo = (props) => {
	return (
		<div
			className="d-flex photo col align-self-stretch justify-content-center align-items-center"
			style={{
				backgroundImage: `url( ${props.src} )`,
				backgroundPosition: 'center',
			}}
		>
			<h1 className="text align-self-center"> {props.text} </h1>
		</div>
	);
};
