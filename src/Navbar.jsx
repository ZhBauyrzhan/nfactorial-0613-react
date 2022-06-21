import React, { useEffect, useState } from 'react';
import neural from './neural.png';
import formatISO9075 from 'date-fns/formatISO9075';
// import getTime from 'date-fns/getTime';

export const Navbar = () => {
	// current = new Date();
	const [time, setTime] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	});
	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img
						src={neural}
						alt=""
						width="30"
						hei
						ght="24"
						className="d-inline-block align-text-top"
					/>
					Bootstrap
				</a>
				<div className="time">{formatISO9075(time, 'MM/dd/yyyy')}</div>
			</div>
		</nav>
	);
};
