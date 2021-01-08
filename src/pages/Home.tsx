import React from "react";
import Header from "../components/Header/Header";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import SideBar from "../components/SideBar/SideBar";
export interface HomeInterface {
	darkMode: boolean;
	ChangeTheme?: Function;
	Feeds?: any;
	search: Function;
	query: string;
	setTag: Function;
	name: string;
}
const Home = ({
	query,
	darkMode,
	ChangeTheme,
	Feeds,
	search,
	setTag,
	name
}: HomeInterface) => {
	return (
		<div className="home-page h-screen w-screen overflow-hidden md:px-32 ">
			<Header darkMode={darkMode} searchFeed={search} query={query} name={name}/>
			<div className="w-full h-full md:mt-8 mt-3 flex flex-row">
				<div className="md:w-1/5 relative">
					<SideBar
						darkMode={darkMode}
						changeMode={ChangeTheme}
						className={"side-bar"}
						setTags={setTag}
					/>
				</div>
				<div className="md:w-4/5 h-full w-full">
					<NewsFeed
						darkMode={darkMode}
						ChangeTheme={ChangeTheme}
						Feeds={Feeds}
						setTag={setTag}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
