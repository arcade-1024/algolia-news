import React, { useState } from "react";
import {
	FiClock,
	FiHeart,
	FiLink,
	FiMenu,
	FiStar,
	FiUser,
} from "react-icons/fi";
import SideBar from "../SideBar/SideBar";
export interface SideBarComponent {
	darkMode: boolean;
	ChangeTheme?: Function;
	Feeds: any;
	setTag: Function;
}
const NewsFeed = ({
	setTag,
	darkMode,
	ChangeTheme,
	Feeds,
}: SideBarComponent) => {
	const [showMenu, setShowMenu] = useState(false);
	const menuHandler = () => {
		setShowMenu(!showMenu);
	};
	
	let currDate = new Date();
	const differenceYear = (year: Date) => {
		// @ts-ignore
		const diffTime = Math.abs(currDate - year);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		const diffMonths = Math.ceil(diffDays / 30);
		if (diffMonths > 12) {
			const diffYear = Math.ceil(diffMonths / 12);
			return diffYear + " years ";
		} else {
			return diffMonths + " Months ";
		}
	};
	return (
		<>
			<div className="md:h-16 flex flex-row justify-between md:px-0 px-4">
				<button
					className="h-8 w-8 flex flex-row justify-center items-center my-auto bg-gray-300 dark:bg-grey-600 md:hidden focus:outline-none rounded-sm"
					onClick={menuHandler}
				>
					<FiMenu size={20} stroke={`${darkMode ? "#fff" : "#4B5863"}`} />
				</button>
				<div className="flex flex-row items-center md:px-8 dark:text-white">
					<span className="mr-4 text-sm text-gray-500 md:inline-block hidden">
						Search
					</span>
					<button className="h-8 bg-gray-300 w-20 dark:bg-grey-600 mx-3 md:mx-0">
						All
					</button>
					<span className="mx-4 text-sm text-gray-500 md:inline-block hidden">
						by
					</span>
					<button className="h-8 bg-gray-300 w-20 dark:bg-grey-600 mx-3 md:mx-0">
						All
					</button>
					<span className="mx-4 text-sm text-gray-500 md:inline-block hidden">
						for
					</span>
					<button className="h-8 bg-gray-300 w-20 dark:bg-grey-600 ml-3 md:mx-0">
						All
					</button>
				</div>
			</div>
			{showMenu ? (
				<div className="w-screen bg-grey-100 absolute mt-3 dark:bg-grey-600 pl-6 py-3">
					<SideBar
						changeMode={ChangeTheme}
						darkMode={darkMode}
						setTags={setTag}
					/>
				</div>
			) : (
				""
			)}
			<div className="news-feed flex flex-col h-full w-full shadow-2xl overflow-y-scroll bg-white dark:bg-grey-400 md:mt-0 mt-3 pb-32 md:pb-56	 dark:text-white">
				{Feeds.map((feed: any) => {
					let dateCreate = new Date(feed.created_at);
					let diffYear = differenceYear(dateCreate);
					return feed.title ? (
						<div
							className="py-5 px-4 border-b w-full flex flex-row justify-between dark:border-black"
							key={feed.objectID}
						>
							<div className="w-11/12">
								<h1 className="break-words">{feed.title}</h1>
								<div className="flex flex-row mt-2">
									<div className="flex items-center">
										<FiHeart size={12} />
										<span className="text-xs ml-1">{feed.points}</span>
									</div>
									<div className="flex items-center ml-2 md:ml-4">
										<FiUser size={12} />
										<span className="text-xs ml-1">{feed.author}</span>
									</div>
									<div className="flex items-center ml-2 md:ml-4">
										<FiClock size={12} />
										<span className="text-xs ml-1">{diffYear} ago</span>
									</div>
									<a
										href={`${feed.url}`}
										className="flex items-center ml-2 md:ml-4"
									>
										<FiLink size={12} />
										<span className="text-xs ml-1">Read</span>
									</a>
								</div>
							</div>
							<div className="h-12 w-1/12 ">
								<button className="h-full w-full flex justify-center items-center focus:outline-none">
									<FiStar />
								</button>
							</div>
						</div>
					) : (
						""
					);
				})}
			</div>
		</>
	);
};

export default NewsFeed;
