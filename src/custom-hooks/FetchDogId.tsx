import { useState, useEffect } from "react";
import { server_calls } from "../api/server";

export const useGetId = (breed_name: string) => {
    const [ dogIdData, setData ] = useState<[]>([])
    // const dogIdRef = useRef()

    // TODO: what kind of event?
    const onChange = (e) => {
      setData(e.target.value)
    }

    const handleDataFetch = async () => {
        const result = await server_calls.get_dogdict(breed_name /*from MultipleSelect*/);
        setData(result.dict_breed_id)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { dogIdData, getData:handleDataFetch }
}