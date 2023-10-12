import React from 'react';
import "./User.css"

const User = ({user}) => {
    const {_id, name, email, role} = user;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td>
                {
                role == "user"? <button className='bg-blue-700 rounded-lg text-sm px-5 py-2 text-white font-semibold'>Make Instructor</button> : <button className='bg-green-700 rounded-lg text-sm px-5 py-2 text-white font-semibold'>Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default User;