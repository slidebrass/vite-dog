import { useState, useEffect } from "react";
import { dog_server_calls } from "../api/dog_server";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import { api_key } from "../api/dog_server.ts"; 

export const useTheCatApi = new TheCatAPI(`${api_key}`, {
    host: "https://api.thedogapi.com/v1",
});

// Is dict_breed_id the correct way to feed this parameter?
export const useGetDogData = (dict_breed_id: number): any => {
    const [ dogData, setData ] = useState<[]>([])

    async function handleDogDataFetch() {
        const result = await dog_server_calls.get(dict_breed_id /**from MultipleSelect */);
        setData(result)        
    }

    useEffect( () => {
        handleDogDataFetch();
    }, [])

    return { dogData, getDogData:handleDogDataFetch }
} 