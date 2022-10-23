import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [username, SetUserName] = useState("");
	const [password, SetPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async () => {
		let result = await fetch("https://6346dee304a6d457579ae92f.mockapi.io/react-redux-store-users", {
			method: "post",
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		);

		const res = fetch('https://6346dee304a6d457579ae92f.mockapi.io/react-redux-store-users"', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: {
				id: 0,
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				return responseJson.movies;
			})
			.catch((error) => {
				console.error(error);
			});


	}



	return (
		<div style={{ textAlign: "center" }}>
			<h1> User Login </h1>
			<>
				<input type="text" placeholder="Enter User Name" onChange={(e) => SetUserName(e.target.value)} /> <br /><br />
				<input type="password" placeholder="Enter Password" onChange={(e) => SetPassword(e.target.value)} /> <br /><br />
				<button className='btn' onClick={handleLogin}> Log In </button>
				<br /><br />
				User Name is : {username} <br /><br />
				Password is :{password}
			</>
		</div>
	)
}

export default Login;
