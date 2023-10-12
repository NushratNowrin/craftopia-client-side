import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const StudentsRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [instructors, setInstructors] = useState([]);
	useEffect(() => {
		fetch("https://craftopia-server-side.vercel.app/instructors")
			.then((res) => res.json())
			.then((data) => setInstructors(data));
	}, []);
    const userEmail = user.email;
    const instructorEmail = instructors.map(instructor => instructor.email);
    const adminEmail = 'admin@gmail.com'

    if ( userEmail!= (instructorEmail || adminEmail)) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default StudentsRoutes;