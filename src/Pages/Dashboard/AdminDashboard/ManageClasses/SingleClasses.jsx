import React from 'react';

const SingleClasses = ({course}) => {
    const {image, name, instructor, email, seats, price, students, status} = course;
    return (
        <tr className='text-sm text-center '>
            <td><img src={image} alt="" /></td>
            <td>{name}</td>
            <td>{instructor}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{seats}</td>
            <td>{students}</td>
            <td>{status}</td>
        </tr>
    );
};

export default SingleClasses;