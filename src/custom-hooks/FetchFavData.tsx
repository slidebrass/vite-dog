import { useState, useEffect } from "react";
import { dog_server_calls } from "../api/dog_server";

export const useGetFavData = (reference_image_id: string) => {
    const [ dogFavData, setFavData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await dog_server_calls.get_image_data(reference_image_id);
        setFavData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { dogFavData, getFavData:handleDataFetch }
}