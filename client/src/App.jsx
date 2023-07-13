import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [userList, setUserList] = useState([]);

	const fetchUserList = async () => {
		const response = axios("http://localhost:3000/");
		const fetchedData = JSON.parse((await response).data);
		setUserList(await fetchedData);
	};

	useEffect(() => {
		fetchUserList();
	}, []);

	return (
		<>
			<h1> client side </h1>

			<h2> Users Logged-in</h2>
			<ol style={{width:'300px', border:'1px solid'}}>
				{userList.map((data, index) => (
					<div key={index} style={{borderBottom:'1px dashed', height:'25px'}}>
						<li >
							{data.userName.toUpperCase()} {` (${data.tokken})`}
						</li>
					</div>
				))}
			</ol>
			{/* <p>{userList[0].tokken}</p> */}
		</>
	);
}

export default App;
