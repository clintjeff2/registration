import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import axios from 'axios';

function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (e) => {
		try {
			setIsLoading(true);
			e.preventDefault();
			console.log(isLoading);

			const data = {
				firstname: fname,
				lastname: lname,
				email,
				password,
			};
			await new Promise((resolve) => setTimeout(resolve, 3000));
			axios({
				method: 'post',
				url: 'https://expense-tracker-5793a-default-rtdb.firebaseio.com/students.json',
				data,
			});
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
			setEmail('');
			setPassword('');
			setFname('');
			setLname('');
		}
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
						{isLoading === true && <span>Registrying...</span>}
						{isLoading === false && <span>Registration</span>}
					</h2>
				</center>
			</div>
			<div className="content">
				<div className="content-register">
					<form onSubmit={handleSubmit} className="content-form">
						{/* firstname, llastname, email, password */}
						<input
							required
							type="text"
							placeholder="First Name"
							value={fname}
							onChange={(e) => setFname(e.target.value)}
						/>
						<input
							required
							type="text"
							placeholder="Last Name"
							value={lname}
							onChange={(e) => setLname(e.target.value)}
						/>
						<input
							required
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							required
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit">Register</button>
					</form>
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
