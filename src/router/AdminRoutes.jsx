import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const AdminRoutes = ({children}) => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
   
    const adminEmail = 'admin@gmail.com';

    if ( userEmail === adminEmail) {
        return children;
    }
};

export default AdminRoutes;