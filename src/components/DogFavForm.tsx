import Input from "./Input";

import { useForm } from "react-hook-form";
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseName, chooseBreed_Group } from "../redux/slices/RootSlice";

interface DogFavFormProps {
    id?: string[];
}

const DogFavForm = ( props:DogFavFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${props.id }`)
            setTimeout(() => {window.location.reload()}, 500)
            event.target.reset()
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseBreed_Group(data.breed_group))

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Breed Name</label>
                    <Input {...register('name')} name="name" placeholder="Breed Name" />
                </div>
                <div>
                    <label htmlFor="breed_group">Breed Group</label>
                    <Input {...register('breed_group')} name="breed_group" placeholder="Breed Group" />
                </div>
                <div className="flex p-1">
                    <button className="flex justify-start m-3 bg-[#5F0F40] text-[#E36414]
                        p-2 rounded border-red-900 border-2 hover:bg-slate-800 hover:text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DogFavForm
