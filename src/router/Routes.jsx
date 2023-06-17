import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Registration/Register";
import Dashboard from "../Layout/Main/Dashboard";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Dashboards from "../Pages/Dashboard/Dashboards";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/instructor",
				element: <Instructor></Instructor>,
			},
			{
				path: "/classes",
				element: <Classes></Classes>,
			},
			{
				path: "/dashboards",
				element: <Dashboards></Dashboards>,
			}
		],
	},
	{
		path: "/login",
		element: <Login></Login>
	},
	{
		path: "/register",
		element: <Register></Register>
	},
	{
		path: "*",
		element: <Error></Error>,
	},
	{
		path: "/dashboard",
		element: <Dashboard></Dashboard>,
		children: [
			{
				// path: "/my-classes",
				// element: <MyClasses></MyClasses>
			}
		]
	}

]);
