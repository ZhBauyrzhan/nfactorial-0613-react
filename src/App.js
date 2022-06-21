import React from 'react';
import { Photo } from './Photo';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Navbar } from './Navbar.jsx';

const imageInfo = [
	{
		src: 'https://source.unsplash.com/gYl-UtwNg_I/1500x1500',
		text: 'HEY',
	},
	{
		src: 'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500',
		text: "LET'S",
	},
	{
		src: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d',
		text: 'GIVE',
	},
	{
		src: 'https://source.unsplash.com/ITjiVXcwVng/1500x1500',
		text: 'ALL',
	},
	{
		src: 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500',
		text: 'YOU CAN',
	},
];
const App = () => {
	return (
		<div className="App">
			<Navbar />
			<div className="d-flex flex-column flex-xl-row align-items-stretch h-100">
				{imageInfo.map((imageInfo) => (
					<Photo
						key={imageInfo.src}
						src={imageInfo.src}
						text={imageInfo.text}
					/>
				))}
			</div>
		</div>
	);
};
export default App;
