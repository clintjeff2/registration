import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
const values = [
	{
		name: 'Jefferson Clinton Youashi',
		age: 30,
		class: 'Level 400',
	},
	{
		name: 'Temukum Binta Kay',
		age: 20,
		class: 'Level 300',
	},
	{
		name: 'Afeseh Trivolta Temukum',
		age: 40,
		class: 'Level 400',
	},
	{
		name: 'Tony - Blair Youashi',
		age: 25,
		class: 'Level 200',
	},
	{
		name: 'Akoh Charlene Yikikang',
		age: 35,
		class: 'Master I',
	},
];

function App() {
	const [search, setSearch] = useState('');
	const [updated, setUpdated] = useState(values);
	const [isLoading, setIsLoading] = useState(false);
	const handleSearch = (e) => {
		e.preventDefault();

		console.log(search);
		const newValues = values.filter((val) => {
			let find = val.name.indexOf(search);

			let final = find === -1 ? false : true;

			return final;
		});

		setUpdated(newValues);
	};
	return (
		<header className="page">
			<img
				className="image-page"
				src="./dave-hoefler-lsoogGC_5dg-unsplash.jpg"
				alt=""
			/>
			<div className="title">
				<center>
					<h2>
						{isLoading === true && <span>Searching...</span>}
						{isLoading === false && <span>Exam Part B</span>}
					</h2>
				</center>
			</div>
			<div className="content">
				<div className="content-register">
					<form onSubmit={handleSearch} className="content-form">
						<input
							type="text"
							placeholder="Search By Name | Search Empty String to Get Defaul results"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</form>
					<div className="data">
						{updated.map((val, index) => (
							<div className="data-content" key={index}>
								<span className="data-content-span num">{index + 1}</span>
								<span className="data-content-span value">{val.name}</span>
								<span className="data-content-span age">{val.age}</span>
								<span className="data-content-span class">{val.class}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="footer">
				<div className="by">
					<a href="#" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
					<span className="name">JEFFERSON CLINTON YOUASHI</span>
				</div>
			</div>
		</header>
	);
}

export default App;
