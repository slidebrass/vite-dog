import { useState, useEffect } from "react";
import { server_calls } from "../api/server";
// interface GetId {
//     handleDataFetch: () => void;
//     dogIdData: string[];
// }
export const useGetId = (breed_name: string[]) => {
    const [ dogIdData, setDogIdData ] = useState<[]>([])

    const handleDataFetch = async () => {
        const result = await server_calls.get_dogdict(breed_name /*from MultipleSelect*/);
        setDogIdData(result.dict_breed_id)
    }

    useEffect( () => {
        handleDataFetch();
    }, [breed_name])

    return [ dogIdData, handleDataFetch ]
}