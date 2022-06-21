import React from 'react';
import neural from './neural.png';
import formatISO9075 from 'date-fns/formatISO9075';
// import getTime from 'date-fns/getTime';

export const Navbar = () => {
	// current = new Date();
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
				<div className="time">
					{formatISO9075(new Date(), 'MM/dd/yyyy')}
				</div>
			</div>
		</nav>
	);
};
