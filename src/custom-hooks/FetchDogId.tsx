import { useState, useEffect } from "react";
import { server_calls } from "../api/server";

export const useGetId = () => {
    const [ dogIdData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get_dict(/**dog_dict_id from MultipleSelect */);
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { dogIdData, getData:handleDataFetch }
}