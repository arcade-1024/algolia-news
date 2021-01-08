import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./sidebar.css";
import {
	FiEye,
	FiHome,
	FiMessageCircle,
	FiMoon,
	FiStar,
	FiSun,
	FiTrendingUp,
	FiUser,
	FiVolume2,
} from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
export interface SideBarComponent {
	darkMode?: boolean;
	changeMode?: any;
	className?: string;
	setTags: Function;
}
const SideBar = ({
	setTags,
	darkMode,
	changeMode,
	className,
}: SideBarComponent) => {
	const history = useHistory();
	const loginHandler = () => {
		history.push(`/login`);
	};
	const changeThemeHandler = (e: any) => {
		e.preventDefault();
		changeMode();
	};
	const [current, setCurrent] = useState(0);
	//  eslint-disable-next-line
	const [navBar, setNavBar] = useState([
		{ id: 1, name: "All", icon: <FiHome size={24} />, tag: " " },
		{ id: 2, name: "Hot", icon: <FiTrendingUp size={24} />, tag: "front_page" },
		{ id: 3, name: "Show HN", icon: <FiVolume2 size={24} />, tag: "show_hn" },
		{
			id: 4,
			name: "Ask HN",
			icon: <FiMessageCircle size={24} />,
			tag: "ask_hn",
		},
		{ id: 5, name: "Polls", icon: <BsQuestionCircle size={24} />, tag: "poll" },
		{ id: 6, name: "Jobs", icon: <FiEye size={24} />, tag: " " },
	]);

	// eslint-disable-next-line
	useEffect(() => {
		const id = localStorage.getItem("currId");
		if (id) {
			setCurrent(Number(id));
		} else {
			setCurrent(1);
		}
	}, []);
	const changeCurrentHandler = (currId: any, tag: string) => {
		setCurrent(currId);
		localStorage.setItem("currId", currId);
		// @ts-ignore
		setTags(tag);
	};
	return (
		<div className={`flex flex-col dark:text-white w-full ${className}`}>
			{navBar.map((navItem) => (
				<div
					className={`my-2 md:my-4 flex flex-row items-center cursor-pointer ${
						navItem.id === current
							? "text-gray-800 font-semibold tracking-wide dark:text-white"
							: "text-gray-400 font-medium dark:text-grey-200"
					}`}
					key={navItem.id}
					onClick={() => changeCurrentHandler(navItem.id, navItem.tag)}
				>
					{navItem.icon}
					<span className="p-0 m-0 md:ml-9 ml-5">{navItem.name}</span>
				</div>
			))}

			<div className="border-t border-gray-200 my-2 md:my-4  mr-6"></div>
			<div className="my-2 md:my-4  flex flex-row items-center cursor-pointer">
				<FiStar size={24} />
				<span className="p-0 m-0 ml-9 font-medium">Starred</span>
			</div>
			<div className="my-2 md:my-4  flex flex-row items-center">
				<div className="flex items-center">
					<label
						htmlFor="toogleA"
						className="flex items-center cursor-pointer"
						onClick={changeThemeHandler}
					>
						<div className="relative ml-1 duration-300">
							<input id="toogleA" type="checkbox" className="hidden" />
							<div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
							<div
								className={`toggle__dot absolute w-6 h-6   ${
									darkMode
										? "-top-1 transform translate-x-full"
										: "-top-1 -left-1"
								} dark:bg-gray-800  bg-white rounded-full shadow inset-y-0 flex flex-row justify-center items-center`}
							>
								{darkMode ? <FiMoon /> : <FiSun />}
							</div>
						</div>
						<span className="p-0 m-0 ml-4 font-medium">Theme</span>
					</label>
				</div>
			</div>
			<div className="border-t border-gray-200 hidden md:inline-block my-2 md:my-4   mr-6"></div>
			<div
				className="hidden md:flex  my-2 md:my-4 flex-row items-center cursor-pointer"
				onClick={loginHandler}
			>
				<FiUser size={24} />
				<span className="p-0 m-0 ml-9 font-medium">Login</span>
			</div>
		</div>
	);
};

export default SideBar;
