import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar";
import Home from "./Components/Home";
import Details from "./Components/StudentDetails";
import StudentList from "./Components/StudentList";
import Profile from "./Components/Profile";


const NotFound = () => <div>Not found</div>;

const AppRouters = () => {
	return (
		<BrowserRouter>
			<AppNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Details />} />
				<Route path="/list" element={<StudentList />} />
				<Route path="/profile" element={<Profile />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouters;

