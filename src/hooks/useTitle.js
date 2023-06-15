import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=> {
        document.title = `${title} | Craftopia`;
    }, [title])
};
export default useTitle