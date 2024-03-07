import React from "react";
import Input from "./Input";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useForm } from "react-hook-form";
import { dog_server_calls } from "../api/dog_server";
import { server_calls } from "../api/server";

// really want to select breed_group from drop_down select, 
// then breed_name from a drop_down select that populates based on breed_group,
// then select an image count from a drop_down select or input field that can validate datatype

export const SingleSelect = () => {
    const [num, setNum] = React.useState([]);
  
    const handleNumChange = (event) => {
      setNum(event.target.value);
    };
  
    return (
      <div>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120}}>
          <InputLabel id="single-select-filled-label">Amount</InputLabel>
          <Select
            labelId="single-select-filled-label"
            id="single-select-filled"
            value={num}
            onChange={handleNumChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={15}>Fifteen</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }

  





interface DogApiFormProps {
    breed_name: string;
    breed_id: number;
}

const DogApiForm = ( props:DogApiFormProps ) => {
    const { register, handleSubmit } = useForm({})


    const onSubmit = (data: any, event: any) => {
        console.log(`Breed Name: ${typeof props.breed_name}`);
        console.log(props.breed_name)
        console.log(data)
        if (props.breed_name && props.breed_name.length > 0) {
            server_calls.get_dict(props.breed_name)
            console.log(`Retrieved: ${ data.dict_breed_name} ${ data.dict_breed_id }`)
            setTimeout(() => {window.location.reload()}, 500)
            event.target.reset()

            // I have no idea how to pass in the retrieved dict_breed_id here
            dog_server_calls.get(data.dict_breed_id)
            console.log(`Retrieved: ${ data.chooseBreed_Name } ${ props.breed_id }`)
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