import { useState, useEffect } from "react";
import { dog_server_calls } from "../api/dog_server";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import { api_key } from "../api/dog_server.ts";
import { chooseBreed_Id, chooseImage_Count } from "../redux/slices/DogRootSlice";

export const useTheCatApi = new TheCatAPI(`${api_key}`, {
    host: "https://api.thedogapi.com/v1",
});

export const useGetDogData = () => {
    const [ dogData, setData ] = useState<[]>([])

    async function handleDogDataFetch() {
        const result = await dog_server_calls.get( {chooseBreed_Id} /** or dict_breed_id from useGetId */, {chooseImage_Count});
        setData(result)        
    }

    useEffect( () => {
        handleDogDataFetch();
    }, [])

    return { dogData, getDogData:handleDogDataFetch }
} 