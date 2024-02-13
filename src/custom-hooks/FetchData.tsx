import { useState, useEffect } from "react";
import { server_calls } from "../api/server";

export const useGetData = () => {
    const [ dogFavData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get_dogs();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { dogFavData, getData:handleDataFetch }
}