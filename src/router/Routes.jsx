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
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import DashboardIntro from "../Pages/Dashboard/DashboardIntro";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


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
		path: "dashboard",
		element: <Dashboard></Dashboard>,
		children: [
			{
				path: "dashboard",
				element: <MyClasses></MyClasses>
			},
			{
				path: "dashboard-intro",
				element: <DashboardIntro></DashboardIntro>
			},
			{
				path: "my-selected-class",
				element: <MySelectedClass></MySelectedClass>,
			},
			{
				path: "my-enrolled-class",
				element: <MyEnrolledClass></MyEnrolledClass>
			},
			{
				path: "payment-history",
				element: <PaymentHistory></PaymentHistory>
			}
		]
	}

]);
