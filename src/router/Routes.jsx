import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Registration/Register";
import Dashboard from "../Layout/Main/Dashboard";
import MySelectedClass from "../Pages/Dashboard/StudentDashboard/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/StudentDashboard/MyEnrolledClass/MyEnrolledClass";
import DashboardIntro from "../Pages/Dashboard/DashboardIntro";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import StudentsRoutes from "./StudentsRoutes";
import InstructorRoutes from "./InstructorRoutes";
import AddClass from "../Pages/Dashboard/InstructorsDashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/InstructorsDashboard/MyClasses/MyClasses";
import AdminRoutes from "./AdminRoutes";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageInstructors from "../Pages/Dashboard/AdminDashboard/ManageInstructors/ManageInstructors";

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
		element: <Login></Login>,
	},
	{
		path: "/register",
		element: <Register></Register>,
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
				path: "",
				element: <DashboardIntro></DashboardIntro>,
			},

			// admin routes
			{
				path: 'manage-classes',
				element: <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
			},
			{
				path: 'manage-users',
				element: <AdminRoutes><ManageInstructors></ManageInstructors></AdminRoutes>
			},

			// instructor routes
			{
				path: "add-class",
				element: (
					<InstructorRoutes><AddClass></AddClass></InstructorRoutes>
				),
			},
			{
				path: "my-classes",
				element: (
					<InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
				),
			},

			// student routes
			{
				path: "my-selected-class",
				element: (
					<StudentsRoutes>
						<MySelectedClass></MySelectedClass>
					</StudentsRoutes>
				),
			},
			{
				path: "my-enrolled-class",
				element: (
					<StudentsRoutes>
						<MyEnrolledClass></MyEnrolledClass>
					</StudentsRoutes>
				),
			},
			{
				path: "payment-history",
				element: (
					<StudentsRoutes>
						<PaymentHistory></PaymentHistory>
					</StudentsRoutes>
				),
			},
		],
	},
]);
