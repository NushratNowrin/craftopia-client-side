import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";


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
				path: "/dashboard",
				element: <Dashboard></Dashboard>,
			}
		],
	},
	{
		path: "/login",
		element: <Login></Login>
	},
	{
		path: "/registration",
		element: <Registration></Registration>
	}

]);
