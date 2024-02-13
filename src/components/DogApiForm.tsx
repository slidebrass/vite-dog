import Input from "./Input";

import { useForm } from "react-hook-form";
import { dog_server_calls } from "../api/dog_server";

// really want to select breed_group from drop_down select, 
// then breed_name from a drop_down select that populates based on breed_group,
// then select an image count from a drop_down select or input field that can validate datatype

interface DogApiFormProps {
    breed_name: string;
    image_count: number;
}

const DogApiForm = ( props:DogApiFormProps ) => {
    const { register, handleSubmit } = useForm({})


    const onSubmit = (data: any, event: any) => {
        console.log(`Breed Name: ${typeof props.breed_name}`);
        console.log(props.breed_name)
        console.log(data)
        if (props.breed_name && props.breed_name.length > 0) {
            dog_server_calls.get(props.breed_name, props.image_count)
            console.log(`Retrieved: ${ data.chooseBreed_Name } ${ props.breed_name }`)
            setTimeout(() => {window.location.reload()}, 500)
            event.target.reset()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="image_count">Image Count</label>
                    <Input {...register('image_count')} name="image_count" placeholder="Image Count" />
                </div>
                <div>
                    <label htmlFor="breed_name">Breed Name</label>
                    <Input {...register('breed_name')} name="breed_name" placeholder="Breed Name" />
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

export default DogApiForm