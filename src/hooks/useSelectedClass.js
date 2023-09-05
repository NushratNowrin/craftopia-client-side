import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useSelectedClass = () =>{
    const { user } = useContext(AuthContext);
    const {_id} = user._id;
	const { refetch, isError, data: selectedClass = [], error } = useQuery({
		queryKey: ["selectedClasses", user?.email],
		queryFn: async () => {
			const response = await fetch(`https://craftopia-server-side.vercel.app/selectedClasses`)
            return response.json()
		},
        
	});
    return [selectedClass, refetch]
}

export default useSelectedClass;