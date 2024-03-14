import { useState, useEffect } from "react";
import { dog_server_calls } from "../api/dog_server";

export const useImageId = (breed_name: string) => {
    const [ imageIdData, setImageIdData ] = useState<[]>([])

    const handleDataFetch = async () => {
        const result = await dog_server_calls.get_image_id(breed_name /*from MultipleSelect*/);
        setImageIdData(result.reference_image_id)
    }

    useEffect( () => {
        handleDataFetch();
    }, [breed_name])

    return [ imageIdData, handleDataFetch ]
}