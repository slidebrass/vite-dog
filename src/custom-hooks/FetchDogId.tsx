import { useState, useEffect } from "react";
import { server_calls } from "../api/server";

export const useGetId = () => {
    const [ dogIdData, setData ] = useState<[]>([])

    const handleDataFetch = async () => {
        const result = await server_calls.get_dict(dict_breed_name /*from MultipleSelect*/);
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { dogIdData, getData:handleDataFetch }
}