import React, { useState, useEffect } from "react";
import axios from "axios";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [query, setQuery] = useState(" ");
	const [tag, setTag] = useState("");
	const [news, setNews] = useState<any[]>([{}]);
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const changeThemeMode = () => {
		setDarkMode(!darkMode);
		// @ts-ignore
		localStorage.setItem("darkMode", darkMode);
	};
	useEffect(() => {
		const mode = localStorage.getItem("darkMode") === "false";
		const tags = localStorage.getItem("tag");
		// @ts-ignore
		setDarkMode(mode);
		//@ts-ignore
		setTag(tags);
	}, []);

	useEffect(() => {
		const fetchFeeds = async () => {
			const result = await axios(
				`https://hn.algolia.com/api/v1/search?query=${query}`
			);
			// console.log(result.data);
			if (query.length) {
				setNews(result.data.hits);
			}
		};
		fetchFeeds();
	}, [query]);
	// https://hn.algolia.com/api/v1/search?tags=${tag}
	useEffect(() => {
		const fetchFeeds = async () => {
			const result = await axios(
				`https://hn.algolia.com/api/v1/search?tags=${tag}`
			);
			setNews(result.data.hits);
		};
		fetchFeeds();
		localStorage.setItem("tag", tag);
	}, [tag]);
	return (
		<div className={`App ${darkMode ? "dark" : ""}`}>
			<div className="bg-gray-50 dark:bg-grey-500">
				<Switch>
					<Route
						exact
						path="/"
						component={() => (
							<Home
								ChangeTheme={changeThemeMode}
								darkMode={darkMode}
								Feeds={news}
								query={query}
								search={setQuery}
								setTag={setTag}
								name={user}
							/>
						)}
					/>
					<Route
						exact
						path="/login"
						component={() => <Login setPass={setPassword} setUser={setUser} />}
					/>
				</Switch>
			</div>
		</div>
	);
}

export default App;
