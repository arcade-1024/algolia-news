import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../assets/logo.png";
export interface LoginInterface {
	setUser: Function;
	setPass: Function;
}
const Login = ({ setUser, setPass }: LoginInterface) => {
	const history = useHistory();
	const userNameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const onSubmitHandler = (e: any) => {
		e.preventDefault();
		setUser(userNameRef.current?.value);
		setPass(passwordRef.current?.value);
		history.push(`/`);
	};
	return (
		<div className="h-screen w-full flex flex-col justify-center items-center">
			<img src={Logo} className="h-16 w-16 mt-10" alt="" />
			<h1 className="text-3xl mt-3 dark:text-white">Login</h1>
			<div className="h-96 md:w-1/3 w-4/5  mt-10 ">
				<form className="flex flex-col items-center" onSubmit={onSubmitHandler}>
					<input
						type="text"
						placeholder="UserName"
						className="my-3 px-2 py-2 shadow-xl dark:bg-grey-600"
						ref={userNameRef}
					/>
					<input
						type="password"
						placeholder="Password"
						className="my-3 px-2 py-2 shadow-xl dark:bg-grey-600"
						ref={passwordRef}
					/>
					<button className="mt-10 bg-blue-500 dark:bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
