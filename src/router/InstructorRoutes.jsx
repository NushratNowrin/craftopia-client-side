import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const InstructorRoutes = ({children}) => {
    const { user } = useContext(AuthContext);
    const [instructors, setInstructors] = useState([]);
	useEffect(() => {
		fetch("https://craftopia-server-side.vercel.app/instructors")
			.then((res) => res.json())
			.then((data) => setInstructors(data));
	}, []);

    const userEmail = user?.email;
    console.log(userEmail)

	// conditional
    const findInstructor = instructors.find(instructor => instructor.email === userEmail);
	const instructorEmail = findInstructor?.email;
	// console.log(instructorEmail);
    const adminEmail = 'admin@gmail.com';
	// console.log(adminEmail)
	const studentEmail = (userEmail!= (instructorEmail || adminEmail))
	// console.log(studentEmail)

    if ( userEmail === instructorEmail) {
        return children;
    }

};

export default InstructorRoutes;