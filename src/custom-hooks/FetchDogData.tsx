import { useState, useEffect } from "react";
import { dog_server_calls } from "../api/dog_server";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import { token } from "../api/dog_server.ts";
import { chooseBreed_Name, chooseImage_Count } from "../redux/slices/DogRootSlice";

export const useTheCatApi = new TheCatAPI(`${token}`, {
    host: "https://api.thedogapi.com/v1",
});

export const useGetDogData = () => {
    const [ dogData, setData ] = useState<[]>([])

    async function handleDogDataFetch() {
        const result = await dog_server_calls.get( {chooseBreed_Name}, {chooseImage_Count});
        setData(result)        
    }

    useEffect( () => {
        handleDogDataFetch();
    }, [])

    return { dogData, getDogData:handleDogDataFetch }
} 