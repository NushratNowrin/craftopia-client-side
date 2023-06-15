import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink
				to={to}
				className={({ isActive }) =>
					isActive ? "text-yellow-300" :  ""
				}>
				{children}
				{/* other code */}
			</NavLink>
        </div>
    );
};

export default ActiveLink;