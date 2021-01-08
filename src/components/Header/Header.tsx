import React, { useRef } from "react";
import "./header.css";
import { FiSearch, FiSettings } from "react-icons/fi";
import Logo from "../../assets/logo.png";
export interface HeaderComponent {
	darkMode?: boolean;
	searchFeed: Function;
	query: string;
	name: string;
}
const Header = ({ query, darkMode, searchFeed,name }: HeaderComponent) => {
	// const inputRef = useRef<HTMLInputElement>(document.createElement("input"));
	const onSearchHandler = (e: any) => {
		console.log(e.target.value);
		searchFeed(e.target.value);
	};
	return (
		<nav className="flex flex-row justify-between w-full mt-7 md:px-0 px-4">
			<div className="flex flex-row  items-center">
				<img src={Logo} className="logo-img md:h-16 md:w-16" alt="" />
				<div className="logo-text flex flex-col ml-2 dark:text-white font-medium text-gray-900">
					{name.length ? (
						name
					) : (
						<>
							<p className="p-0 m-0">Search</p>
							<p className="p-0 m-0">Hacker News</p>
						</>
					)}
				</div>
			</div>
			<div className="search-bar md:w-4/5 flex-row flex justify-between">
				<form className="relative h-full md:w-3/4">
					<FiSearch
						className="absolute top-1/2 ml-4 transform -translate-y-1/2"
						size={24}
						stroke={`${darkMode ? "#fff" : "#4B5863"}`}
					/>
					<input
						type="text"
						className="h-full w-full bg-gray-200 dark:bg-grey-400 rounded-md focus:outline-none px-2 pl-14 md:text-2xl tracking-wide  dark:text-white text-gray-600"
						placeholder="Search"
						value={query}
						autoFocus
						onChange={onSearchHandler}
					/>
				</form>
				<button className="h-full md:w-1/5 bg-gray-200 rounded-md flex flex-row justify-center items-center hover:bg-gray-400 dark:bg-grey-400 duration-300 dark:text-white text-gray-600 focus:outline-none setting-button">
					<FiSettings
						size={18}
						className={`md:mr-3`}
						stroke={`${darkMode ? "#fff" : "#4B5863"}`}
					/>
					<span>Settings</span>
				</button>
			</div>
		</nav>
	);
};

export default Header;
